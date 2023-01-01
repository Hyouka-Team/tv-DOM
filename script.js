function movieDisplay(){
    makeEpisode(document.body)
    console.log('hey')
}
`• All episodes must be shown 
• For each episode, AT LEAST following must be displayed: 
• the episode's name 
• the season number 
• the episode number 
• the episode's medium-sized image 
• the episode's summary text 
• You should combine season number and episode number into an episode code: 
• Each part should be zero-padded to two digits.
• Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be  
incorrect. 
Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back  
to that site (or the specific episode on that site). See tvmaze.com/api#licensing.
`

function makeEpisode(parentElement,datas){
    for(let i = 0; i < datas.length;i++)
        {
            console.log(parentElement)
            let [div,name,season,number,image,summary,code] = [
                document.createElement('article'),
                document.createElement('h3'),
                document.createElement('strong'),
                document.createElement('strong'),
                document.createElement('img'),
                document.createElement('p'),
                document.createElement('p'),
                document.createElement('p'),
            ]
            let items = [["div",div],["name",name],["number",number],["season",season],["image",image,[true,"src"]],["summary",summary],["code",code,[true,"code"]]]
            let itemsFieldName = {
                keys : [2,3,6],
                values : ["episode number","season","code number"]

            }
            for(let j = 1; j < items.length; j++){
                try{
                    if(items[j][2][1] === "src"){
                        items[j][1].src = datas[i][items[j][0]]["medium"]
                        items[0][1].append(items[j][1])
                    } else if(items[j][2][1] === "code"){
                        let text = {
                            e : datas[i]['number'],
                            s: datas[i]['season']
                        }
                        console.log()
                        if(text.e.toString.length===1){
                            text.e = '0' + text.e
                        }
                        if(text.s.toString.length===1){
                            text.s = '0' + text.s
                            console.log(text.s)
                        }
                        let tag = null
                        if(itemsFieldName.keys.includes(j)){
                            tag = itemsFieldName.values[itemsFieldName.keys.indexOf(j)]
                        } else{
                            tag = items[j][0]
                        }

                        items[j][1].innerHTML = tag + ": E" + text.e + "S" + text.s
                        items[0][1].append(items[j][1])

                    }
                } catch(error){
                    console.log(items)
                    let text = datas[i][items[j][0]]
                    if(text!== undefined){
                        let tag = null
                        if(itemsFieldName.keys.includes(j)){
                            tag = itemsFieldName.values[itemsFieldName.keys.indexOf(j)]
                        } else{
                            tag = items[j][0]
                        }
                        items[j][1].innerHTML = tag + ": " + text
                        items[0][1].append(items[j][1])

                    }
                    console.log()
                }
                    // item[1].innerText = text
                    // div.append(items[1])
                // }
            }
            parentElement.append(items[0][1])
        }    
    // div.append(name,number,image,summary,code)
    // console.log(div)
    // datas = datas.map(data=>{
    //     return [['name',data.name],['number',data.season],['summary',data.summary],['image',data.image.medium,true],['code',data.code]]
    // })
    // console.log(datas)
    // function fillingEpisodeDiv(datas,parentElement){
    //     for(let i = 0;i<datas.length;i++){
    //         console.log(i)
    //         let episodeDiv = {
    //             div : document.createElement('article'),
    //             name : document.createElement('h3'),
    //             num : document.createElement('strong'),
    //             image : document.createElement('img'),
    //             summary : document.createElement('p'),
    //             code : document.createElement('p'),
    //         }
            
    //         for(let j = 0;j<datas[i].length;j++){
    //             let row = datas[i][j]
    //             if(row[0]){
    //                 if(row[2]){
    //                     // console.log(row[2])
    //                     episodeDiv.image.src = row[1]
    //                 }
    //                 // console.log(row)
    //                 try{
    //                     if(episodeDiv[datas[i][j][0]].innerHTML === "undefined"){
    //                         episodeDiv[row[0]].innerHTML = ""

    //                     } else{
    //                         episodeDiv[row[0]].innerHTML = row[0] + ': ' + row[1]?row[1]:"what"


    //                     }

    //                 }catch(er){
    //                     console.log()

    //                     // console.log(episodeDiv[datas[i][j][1]] )
    //                 }
    //                     episodeDiv['div'].append(episodeDiv[row[0]])
    //                     // console.log(episodeDiv)

    //             }
    
    //         }
                        // parentElement.appendChild(episodeDiv['div'])

            // }}
        //     for(row of episode){

        //     }
        //     console.log(episodeDiv.div)
        //     console.log('hey')

        // }
        //request result format is an array e.g [['name','name'],'num',['image','src',true]]
        
    // }
    // }
    fillingEpisodeDiv(datas,parentElement)
}
const episodeReq = async () => {
          const res = await fetch("https://api.tvmaze.com/shows/22036/episodes");
        //   const res = await fetch("/api.js");

          const data = await res.json();
        //   console.log(res,data)
        // console.log(document.body)
            makeEpisode(document.body,data)
          // console.log(data);
}
episodeReq()