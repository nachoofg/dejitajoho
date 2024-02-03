import { battery } from "systeminformation";

export async function BATT() {
    if((await battery()).hasBattery) return {
        batpercentage: (await battery()).isCharging, 
        batcharging : (await battery()).percent,
        timeRemaining : (await battery()).timeRemaining,
        manufacturer : (await battery()).manufacturer,
        capacityUnit : (await battery()).capacityUnit,
        voltage : (await battery()).voltage,
        designedCapacity : (await battery()).designedCapacity,
    }
}