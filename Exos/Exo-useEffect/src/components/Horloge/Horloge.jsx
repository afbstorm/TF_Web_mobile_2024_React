import { useEffect, useState } from "react";

const Horloge = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const timer = setTimeout(() => {
            console.log('🟢');
            setDate(new Date());
        }, 1000)

        return () => {
            console.log('🔴');
            clearTimeout(timer);
        }

    })

    const time = date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })

    return (
        <>
            {time}
        </>
    );
};

export default Horloge;
