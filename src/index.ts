import { CPU } from "./functions/cpu";
import { MEM } from "./functions/ram";
import { useCpuColoration } from "./functions/misc/useCpu";
import ascii from 'ascii-table';
import { nvidia } from "./functions/nvidia";
import { GR } from "./functions/graphics";
import { disk } from "./functions/disk";
import { BATT } from "./functions/battery";

async function sh() {
    setInterval(async () =>{
        const cpu = await CPU();
        const mem = await MEM();
        const nvidiaInfo = await nvidia();
        const graphicsInfo = await GR();
        const diskInfo = await disk();
        const batteryInfo = await BATT();
    
        console.clear();
    
        let table = new ascii('System Information')
            .setBorder(' ')
            .setHeading('Comments', 'Properties')
            .addRow(('CPU Use%'), `${useCpuColoration(Number(cpu.CPU_Usage))}`)
            .addRow(('CPU Speed'), `${(`${cpu.CPU_speed}`)}`)
            .addRow(("Active Cores"), `${(`${cpu.CPU_activeCores}`)}`)
            .addRow(("Brand"), `${(cpu.CPU_brand)}`)
            .addRow(("All Cores"), `${(`${cpu.CPU_cores}`)}`)
            .addRow(("Model"), `${(cpu.CPU_model)}`)
            .addRow(("Processores"), `${(`${cpu.CPU_processors}`)}`)
            .addRow(("Vendor"), `${(cpu.CPU_vendor)}`)
            .addRow(("Physical Cores"), `${(`${cpu.CPU_physicalCores}`)}`)
            .addRow(("Voltage"), `${(cpu.CPU_voltage)}`)
            .addRow(('Memory Free'), `${mem.free}`)
            .addRow(('Memory Used'), `${mem.used}`)
            .addRow(('Memory Total'), `${mem.total}`)
            //@ts-ignore
            .addRow(('Nvidia Name'), `${nvidiaInfo.nvidia_name}`)
            //@ts-ignore
            .addRow(('Nvidia Fan Speed'), `${nvidiaInfo.nvidia_fan}`)
            //@ts-ignore
            .addRow(('Nvidia Memory Total'), `${nvidiaInfo.nvidia_mem_total}`)
            //@ts-ignore
            .addRow(('Nvidia Memory Used'), `${nvidiaInfo.nvidia_mem_used}`)
            //@ts-ignore
            .addRow(('Nvidia Memory Free'), `${nvidiaInfo.nvidia_mem_free}`)
            //@ts-ignore
            .addRow(('Nvidia Memory Percent'), `${nvidiaInfo.nvidia_mem_percent}`)
            //@ts-ignore
            .addRow(('Nvidia Load'), `${nvidiaInfo.nvidia_load}`)
            //@ts-ignore
            .addRow(('Nvidia Temperature'), `${nvidiaInfo.nvidia_temp}`)
            .addRow(('Graphics Name'), `${graphicsInfo.gfxname}`)
            .addRow(('Graphics RAM'), `${graphicsInfo.gfxram}`)
    
        console.log(table.render());
    }, 5000)
}
sh()