import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const Scale = () => {
const [selectedOption, setSelectedOption] = useState("");

return (
<Table>
<TableHead>
<TableRow>
<TableCell>Product is affordable</TableCell>
<TableCell>
   <div style={{textAlign:"center"}}> Strongly Disagree</div>
        <div style={{textAlign:"center"}}>
            <input style={{textAlign: "center"}}
                type="radio"
                name="affordable"
                value="Strongly Disagree"
                checked={selectedOption === "Strongly Disagree"}
                onChange={() => setSelectedOption("Strongly Disagree")}
            />
        </div>
    
</TableCell>
<TableCell>
   <div style={{textAlign:"center"}}>Disagree</div>
        <div style={{textAlign:"center"}}>
            <input style={{textAlign: "center"}}
                type="radio"
                name="affordable"
                value="Strongly Disagree"
                checked={selectedOption === "Strongly Disagree"}
                onChange={() => setSelectedOption("Strongly Disagree")}
            />
        </div>
    
</TableCell>
<TableCell>
   <div style={{textAlign:"center"}}>Neutral</div>
        <div style={{textAlign:"center"}}>
            <input style={{textAlign: "center"}}
                type="radio"
                name="affordable"
                value="Strongly Disagree"
                checked={selectedOption === "Strongly Disagree"}
                onChange={() => setSelectedOption("Strongly Disagree")}
            />
        </div>
</TableCell>
<TableCell>
   <div style={{textAlign:"center"}}>Agree</div>
        <div style={{textAlign:"center"}}>
            <input style={{textAlign: "center"}}
                type="radio"
                name="affordable"
                value="Strongly Disagree"
                checked={selectedOption === "Strongly Disagree"}
                onChange={() => setSelectedOption("Strongly Disagree")}
            />
        </div>
</TableCell>
<TableCell>
   <div style={{textAlign:"center"}}>Strongly Agree</div>
        <div style={{textAlign:"center"}}>
            <input style={{textAlign: "center"}}
                type="radio"
                name="affordable"
                value="Strongly Disagree"
                checked={selectedOption === "Strongly Disagree"}
                onChange={() => setSelectedOption("Strongly Disagree")}
            />
        </div>
</TableCell>
</TableRow>
</TableHead>
<TableBody>
<TableRow>

</TableRow>
</TableBody>
</Table>
);
};

export default Scale;