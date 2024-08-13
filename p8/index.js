var files = [
    { name: "document1.pdf", size: 500 },
    { name: "document2.pdf", size: 700 },
    { name: "image1.png", size: 200 },
    { name: "image2.png", size: 300 },
    { name: "text1.txt", size: 100 },
    { name: "text2.txt", size: 150 },
    { name: "photo1.jpg", size: 400 },
    { name: "photo2.jpg", size: 350 },
    { name: "program1.exe", size: 1000 },
    { name: "program2.exe", size: 1200 },
    { name: "data1.csv", size: 600 },
    { name: "data2.csv", size: 500 },
    { name: "report1.pdf", size: 800 },
    { name: "report2.pdf", size: 900 },
    { name: "image3.png", size: 250 },
    { name: "text3.txt", size: 175 },
    { name: "photo3.jpg", size: 450 },
    { name: "document3.pdf", size: 750 }
  ];
  
  var totalSize = files.reduce(function(acc, file) {
    return acc + file.size;
  }, 0);
  
  var largestFile = files.reduce(function(max, file) {
    return (file.size > max.size ? file : max);
  }, files[0]);
  
  var largestFiles = files.slice()
    .sort(function(a, b) {
      return b.size - a.size;
    })
    .slice(0, 5);
  
  var filesByExtension = files.reduce(function(acc, file) {
    var ext = file.name.split('.').pop();
    if (!acc[ext]) {
      acc[ext] = [];
    }
    acc[ext].push(file.name);
    return acc;
  }, {});
  
  var result = {
    totalSize: totalSize,
    largestFiles: largestFiles,
    filesByExtension: filesByExtension
  };
  
  console.log(result);
  