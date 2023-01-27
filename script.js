var baseURL = 'https://swapi.dev/api/films/'
var section = document.getElementById('container')

function getANH() {
    var swapi = 'https://swapi.dev/api/films/1/'
    fetch(swapi)
     .then(function(response){
        return response.json();
    })
     .then(function(data) { 
        console.log(data)
    
         var title = data.title
         var crawl = data.opening_crawl
         var date = data.release_date
         var filmTitle = document.createElement('i')
         var crawlText = document.createElement('i')
         var dateText = document.createElement('i')
         filmTitle.textContent = title
         crawlText.textContent = crawl
         dateText.textContent = date
    
    
    
        document.getElementById('anh-title').appendChild(filmTitle)
        document.getElementById('anh-opening').appendChild(crawlText)
        document.getElementById('anh-date').appendChild(dateText)
    
          
        });
    }
function getESB() {
        var swapi = 'https://swapi.dev/api/films/2/'
        fetch(swapi)
         .then(function(response){
            return response.json();
        })
         .then(function(data) { 
            console.log(data)
        
             var title = data.title
             var crawl = data.opening_crawl
             var date = data.release_date
             var filmTitle = document.createElement('i')
             var crawlText = document.createElement('i')
             var dateText = document.createElement('i')
             filmTitle.textContent = title
             crawlText.textContent = crawl
             dateText.textContent = date
        
        
        
            document.getElementById('esb-title').appendChild(filmTitle)
            document.getElementById('esb-opening').appendChild(crawlText)
            document.getElementById('esb-date').appendChild(dateText)
        
              
            });
        }

function getROTJ() {
var swapi = 'https://swapi.dev/api/films/3/'
fetch(swapi)
 .then(function(response){
    return response.json();
})
 .then(function(data) { 
    console.log(data)

     var title = data.title
     var crawl = data.opening_crawl
     var date = data.release_date
     var filmTitle = document.createElement('i')
     var crawlText = document.createElement('i')
     var dateText = document.createElement('i')
     filmTitle.textContent = title
     crawlText.textContent = crawl
     dateText.textContent = date



    document.getElementById('roj-title').appendChild(filmTitle)
    document.getElementById('roj-opening').appendChild(crawlText)
    document.getElementById('roj-date').appendChild(dateText)

      
    });
}

function getPM() {
    var swapi = 'https://swapi.dev/api/films/4/'
    fetch(swapi)
     .then(function(response){
        return response.json();
    })
     .then(function(data) { 
        console.log(data)
    
         var title = data.title
         var crawl = data.opening_crawl
         var date = data.release_date
         var filmTitle = document.createElement('i')
         var crawlText = document.createElement('i')
         var dateText = document.createElement('i')
         filmTitle.textContent = title
         crawlText.textContent = crawl
         dateText.textContent = date
    
    
    
        document.getElementById('pm-title').appendChild(filmTitle)
        document.getElementById('pm-opening').appendChild(crawlText)
        document.getElementById('pm-date').appendChild(dateText)
    
          
        });
    }

function getCL() {
        var swapi = 'https://swapi.dev/api/films/5/'
        fetch(swapi)
         .then(function(response){
            return response.json();
        })
         .then(function(data) { 
            console.log(data)
        
             var title = data.title
             var crawl = data.opening_crawl
             var date = data.release_date
             var filmTitle = document.createElement('i')
             var crawlText = document.createElement('i')
             var dateText = document.createElement('i')
             filmTitle.textContent = title
             crawlText.textContent = crawl
             dateText.textContent = date
        
        
        
            document.getElementById('cl-title').appendChild(filmTitle)
            document.getElementById('cl-opening').appendChild(crawlText)
            document.getElementById('cl-date').appendChild(dateText)
        
              
            });
        }

function getRTS() {
            var swapi = 'https://swapi.dev/api/films/6/'
            fetch(swapi)
             .then(function(response){
                return response.json();
            })
             .then(function(data) { 
                console.log(data)
            
                 var title = data.title
                 var crawl = data.opening_crawl
                 var date = data.release_date
                 var filmTitle = document.createElement('i')
                 var crawlText = document.createElement('i')
                 var dateText = document.createElement('i')
                 filmTitle.textContent = title
                 crawlText.textContent = crawl
                 dateText.textContent = date
            
            
            
                document.getElementById('rts-title').appendChild(filmTitle)
                document.getElementById('rts-opening').appendChild(crawlText)
                document.getElementById('rts-date').appendChild(dateText)
            
                  
                });
            }


getPM();
getROTJ();
getANH();
getESB();
getCL();
getRTS();