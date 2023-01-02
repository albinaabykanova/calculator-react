import React, { useEffect, useState } from "react";





const Calculate = () => {
    const [time, setTime] = useState(new Date());
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

    useEffect(() => {
        setTime(new Date());
    }, [new Date().getMinutes()]);

   const handleButtonPress = content => () => {
    const num = parseFloat(value);

    if (content === "AC") {
        setValue("0");
        setMemory(null);
        setOperator(null);
        return;
    }

    if (content === "±") {
        setValue((num * -1).toString());
        return;
    }
   }
}