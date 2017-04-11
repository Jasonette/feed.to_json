describe('feed to json', function(){
	it('rss to json', function(done){
    // read cson file
    var fs = require('fs')
		var str = fs.readFileSync(process.cwd() + "/data.rss").toString()

    // require + setup
    require('to_json').use('rss', require('./index'))

    // usage
		str.to_json('rss', function(json){
      console.log("parsed = ", json)
      done()
    })
	})
})
