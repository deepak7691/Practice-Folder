const fs = require("fs")

fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
        console.log("Error while reading the file");
    } else {
        console.log("Content of the file are", data)
    }
})

const data = JSON.stringify({
    name: "deepak",
    location: "Badnawar"
})

fs.writeFile("demo.json", data, function (err, data) {
    if (err) {
        console.error("Could Not Write to the file")
    } else {
        console.log("File Written Successfully")
    }
})


//Linux---> fs.rm

//Windows ---> fs.unlink

fs.unlink("dummy2.json", function (err) {
    if (err) {
        console.log("Could Not Delete File")
    } else {
        console.log("Huh! File has been Deleted")
    }
})



fs.readdir("node_modules", function (err, filelist) {
    if (err) {
        console.log("Could Not read Directory")
    } else {
        console.log("List is", filelist)
    }
})
