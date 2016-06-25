describe('files', function() {

  beforeEach(module('platformSdk'));

  it('should return all files...', inject(function(files) {

      files.getAll()

    expect().toEqual([]);

  }));

  it('should get file with id 1...', inject(function(files) {

    //   var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
    //   var rawfile = new Parse.File("makelove.txt", { base64: base64 });
    //   let file = {
    //       name: "makemakelove",
    //       file: rawfile
    //   }
    //
    // expect(files.getById(1)).toEqual(file);

  }));

  it('should create a file...', inject(function(files) {
    var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
    var rawfile = new Parse.File("makelove.txt", { base64: base64 });
    let file = {
        name: "makemakelove",
        file: rawfile
    };
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(file)
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    files.insert(file).then(
        function (savedFile) {
            console.log("*****************************")
            console.log(savedFile)
            console.log("*****************************")
            
            expect(savedFile.toEqual(file))
        },
        function (error) {
            console.error(error);
        }
    )
  }));

  it('should update file 1...', inject(function(files) {

    let fileModied = {}

    expect(files.update(1,fileModied)).toEqual(fileModied);

  }));

});
