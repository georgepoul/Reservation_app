import {Select as MuiSelect, MenuItem, SelectChangeEvent} from "@mui/material";
import React, {ReactNode} from "react";

const Select: React.FC<{
    id: string;
    value:string;
    label:string;
    onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
    }> = (props) => {
    return (
        <MuiSelect
            id={props.id}
            value={props.value}
            label={props.label}
            onChange={props.onChange}
        >
            <MenuItem value='100'>100</MenuItem>
            <MenuItem value='101'>101</MenuItem>
            <MenuItem value='102'>102</MenuItem>
            <MenuItem value='103'>103</MenuItem>
            <MenuItem value='104'>104</MenuItem>
            <MenuItem value='105'>105</MenuItem>
        </MuiSelect>
    );
}

export default Select;
