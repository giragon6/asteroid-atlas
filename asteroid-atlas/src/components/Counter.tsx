import { useEffect, useState } from "react";

type CounterParams = {
    date: Date
}
  
const Counter = ({ date }: CounterParams) => {
    const DATE_REFRESH_FREQ = 1000;

    const [now, setNow] = useState(new Date);

    useEffect(() => {
        setInterval(
            () => setNow(new Date()),
            DATE_REFRESH_FREQ,
        );
    });

    function formatMs(milliseconds: number) {        
        const total_seconds = Math.floor(milliseconds / 1000);
        const total_minutes = Math.floor(total_seconds / 60);
        const total_hours = Math.floor(total_minutes / 60);
        const days = Math.floor(total_hours / 24);
      
        const seconds = total_seconds % 60;
        const minutes = total_minutes % 60;
        const hours = total_hours % 24;
        
        return { d: days, h: hours, m: minutes, s: seconds };
      };

    const countdown = formatMs(date.getTime() - now.getTime());

    return (
        <p><b>Countdown Until Close Approach:</b> {countdown.d} days, {countdown.h} hours, {countdown.m} minutes, {countdown.s} seconds</p>
    );
};

export default Counter;