import { Select, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getEmployees } from "../../../services/Employee";
import { Control } from "react-hook-form/dist/types";
import { Controller } from "react-hook-form";

type EmployeeAutocompleteProps = {
  name: string;
  control: Control<any, any>;
  error: string | undefined;
};
const EmployeeAutocomplete: React.FC<EmployeeAutocompleteProps> = ({
  name,
  control,
  error,
}) => {
  const [employees, setEmployees] = useState<any[]>([]);

  const [selectedEmployee, setSelectedEmployee] = useState<string>("");

  useEffect(() => {
    getEmployees()
      .then((res) => {
        setEmployees(res);
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
          <Select {...field} value={selectedEmployee}>
            <option value="-1">Selecione um funcionário</option>
            {employees?.map((employee) => (
              <option key={employee._id} value={employee._id}>
                {employee.name}
              </option>
            ))}
          </Select>
          {error && <h1>{error}</h1>}
        </Stack>
      )}
    />
  );
};

export default EmployeeAutocomplete;
