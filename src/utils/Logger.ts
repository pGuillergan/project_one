export function log(desc, function_name, input, output, scriptName){

    let dateTime = new Date()

    console.log("   ");
    console.log("------------------------------");
    console.log(`Timestamp: ${dateTime}`)
    console.log(`Description: ${desc}`)
    console.log(`File Name: ${scriptName}`);
    console.log(`Function Name: ${function_name}`);
    console.log(`Input: ${input}`);
    console.log(`Output: ${output}`);
    console.log("------------------------------");

}
