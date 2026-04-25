import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Chip, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { SpiritProps } from "../lib/definitions";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import ImgFill from "./image-fill";
import styles from "../css/Search.module.css";
import Img from "./image";

export default function Search({ data }) {
  const [overlay, setOverlay] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const { MAX_SMALLSCREEN } = data;
  // const isPageWidth: boolean | undefined = usePageWidth(MAX_SMALLSCREEN);
  const { replace } = useRouter();

  if (data) {
    // data used by the auto complete component
    const ACData = data.map(({ name, id, category, variety, packaging }) => {
      return { name, id, category, variety, packaging };
    });

    const handleClick = (): void => setOverlay(true); // apply overlay when auto complete is focused

    const handleBlur = (): void => setOverlay(false); // remove overlay

    const handleChange = (
      _: SyntheticEvent<Element, Event>,
      val: SpiritProps | null,
    ): void => {
      if (val) {
        // const { category, variety, id } = val;
        setOverlay(false);
        setOpen(false);
        // replace(`/${category.toLowerCase()}/${hyphenate(variety)}/${id}`);
      }
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLDivElement> & {
        defaultMuiPrevented?: boolean | undefined;
      },
    ): void => {
      console.log("handleKeyDown");

      const { key } = e;
      // console.log(key);
      // console.log(searchTerm);

      if (key === "Enter" && searchTerm) {
        // console.log("key === Enter && searchTerm");

        // if entered press, display results on category page
        setOverlay(false);
        setOpen(false);
        replace(`/spirtis?search=${searchTerm}`);
      }
    };

    const handleInputChange = (
      _: SyntheticEvent<Element, Event>,
      val: string,
    ): void => {
      console.log("handleInputChange");

      // store user input in searchTerm state var
      // only show results if 2 or more characters are entered
      // console.log("      setSearchTerm(val)");
      // console.log(val);

      setSearchTerm(val);
      if (val.length <= 1) {
        if (open) setOpen(false); // TODO: ??
      } else if (!open) setOpen(true);
    };

    return (
      <section className={styles.container}>
        <div className={overlay ? styles.overlay : ""}></div>
        <Autocomplete
          open={open} // list of results below input box
          onChange={(e, value) => handleChange(e, value)}
          onInputChange={(_, value) => handleInputChange(_, value)}
          onKeyDown={(e) => handleKeyDown(e)}
          getOptionLabel={(option: SpiritProps) => option.name}
          className={`${styles.autoComplete} ${
            overlay ? styles.pageWidth : ""
          }`}
          options={ACData}
          filterOptions={createFilterOptions({
            limit: 7,
          })}
          isOptionEqualToValue={(option, value) =>
            value === undefined || option.id === value.id
          }
          renderOption={(props, { id, name, short_name }, { inputValue }) => {
            // TODO: name?? using?? try just short_name?
            const matches = match(name, inputValue);
            const parts = parse(name, matches);
            return (
              <li {...props} className={styles.listItem} key={id}>
                <div className={styles.itemCont}>
                  <div className={styles.itemImg}>
                    <ImgFill
                      src={`spirits/${id}.webp`}
                      alt={short_name}
                      css="product30h"
                      priority={false} // priority = max in view onload
                    />
                  </div>
                  <div className={styles.itemLabel}>
                    {parts.map((part, index) => (
                      <span
                        style={{
                          fontWeight: part.highlight ? 700 : 400,
                        }}
                        key={index}
                      >
                        {part.text}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          }}
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                label={option.id}
                key={option.id}
              />
            ));
          }}
          renderInput={(params) => (
            <TextField
              // label={isPageWidth ? "Search" : "What are you looking for?"}
              label="Search"
              {...params}
              className={styles.tf}
              onClick={handleClick}
              onBlur={handleBlur}
              // placeholder="Search spirits"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#555", // or "none" to remove it entirely
                    borderWidth: "1px", // prevents the border from thickening on focus
                    color: "white",
                  },
                "& .MuiOutlinedInput-root": {
                  paddingRight: "10px !important", // Adjust padding here
                },
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    {/* <SearchIcon /> */}
                    <Img
                      imgSrc={`icons/search.png`}
                      imgAlt="search"
                      imgWidth={24}
                      imgHeight={24}
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
        ></Autocomplete>
      </section>
    );
  }
  return null;
}
