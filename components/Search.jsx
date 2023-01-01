import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Icon, SearchIcon } from "@chakra-ui/icons";

function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <>
      <InputGroup>
        <InputLeftAddon pointerEvents="none">
          <SearchIcon />
        </InputLeftAddon>
        <Input
          width={"32"}
          variant="outline"
          placeholder="Search"
          className="text-white"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              router.push(`/search/${query}`);
            }
          }}
          type={"search"}
        />
      </InputGroup>
    </>
  );
}

export default Search;
