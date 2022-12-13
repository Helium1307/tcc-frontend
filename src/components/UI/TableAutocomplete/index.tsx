import { Select, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { getTables } from "../../../services/Table";
import { Table } from "../../../types/Table";

type TableAutocompleteProps = {
  name: string;
  control: Control<any, any>;
  error: string | undefined;
};

const TableAutocomplete: React.FC<TableAutocompleteProps> = ({
  name,
  error,
  control,
}) => {
  const [tables, setTables] = useState<Table[]>([]);
  const [selectedTable, setSelectedTable] = useState<string>("");
  useEffect(() => {
    getTables()
      .then((res) => {
        setTables(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Stack>
          <Select {...field} value={selectedTable}>
            {tables?.map((table) => (
              <option key={table._id} value={table._id}>
                {table.name}
              </option>
            ))}
          </Select>
          {error && <h1>{error}</h1>}
        </Stack>
      )}
    />
  );
};

export default TableAutocomplete;
