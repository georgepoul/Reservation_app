import { Input } from "@mui/material";
import React, {ChangeEventHandler} from "react";

const Text: React.FC <{id: string, data: string, onChange: ChangeEventHandler<HTMLInputElement>}> = (props) => {
    return <Input id={props.id} required value={props.data} onChange={props.onChange} />;
}

export default Text;
