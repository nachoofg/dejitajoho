import { CPU } from "./functions/cpu";
import { MEM } from "./functions/ram";
import { BATT } from "./functions/battery";
import { GR } from "./functions/graphics";
import { disk } from "./functions/disk";
import { nvidia } from "./functions/nvidia";

import ascii from 'ascii-table'

async function abc() {
    const cpu = (await CPU())
    for (let i; i = 100; i++) {
        return setInterval(() => {
            let table = new ascii('CPU')
                .setHeading('', 'Propiedad')
                .addRow(1, cpu.CPU_Usage)
                .addRow(2, cpu.CPU_activeCores)
                .addRow(3, cpu.CPU_brand)
                .addRow(4, cpu.CPU_cores)
                .addRow(5, cpu.CPU_model)
                .addRow(6, cpu.CPU_activeCores)
                .addRow(7, cpu.CPU_brand)
                .addRow(8, cpu.CPU_processors)
                .addRow(9, cpu.CPU_vendor)
                .addRow(10, cpu.CPU_physicalCores)
                .addRow(11, cpu.CPU_voltage)
            console.log(table.toString())
        }, 4000)

    }
}
abc()