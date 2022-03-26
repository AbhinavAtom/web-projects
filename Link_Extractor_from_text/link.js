




var text = "Hello this is an example";
var links = [];
var currentClicked = '';


const extract = () => {
    currentClicked = 'btn1';
    text = document.getElementById("textin").value;
    text = removeNewLine(text);
    document.getElementById("copy-all-btn").innerText = "Copy All";
    findLink();
}

var len = 0;
const findLink = () => {

    text = text.split(" ")
    links = [];
    len = text.length;


    for(let i=0 ; i<len ; i++){

        if(text[i].search("http://") != -1 && (text[i].length >= 10) ) {
            if(text[i].search(".") != -1 && (countDot(text[i]) >= 1)){
                uniqueLinks(text[i]);
            }
        }

        else if(text[i].search("https://") != -1 && (text[i].length >= 11)){
            if(text[i].search(".") != -1  && (countDot(text[i]) >= 1))
                uniqueLinks(text[i]);
        }

        else if(text[i].search("www") != -1 && (text[i].length >= 7)){
            if(text[i].search(".") != -1  && (countDot(text[i]) >= 2)){
                 uniqueLinks("https://" + text[i]);
            }
        }
    }
    addToPage();
}

const countDot = (edit) => {
    var m = edit.length;
    var count = 0;
    for(let i=0 ; i<m; i++){
        if(edit[i] == "." && (edit[i-1] != ".") && (i<m-1 && (edit[i+1] != "" || edit[i+1] != " ")) && edit[m-1] != "."){
            count++;
        } 
        if((edit[i] == "." && (edit[i-1] == ".")) || (edit[m-1] == ".")){
            count  = 0;
        }
    }
    return count;
}


// function to store only unique links
const uniqueLinks = (link)=> {
    if (links.indexOf(link) == -1){
        links.push(link);
        
    }

    if(all_links.indexOf(link) == -1){
        all_links.push(link);
    }
}

var link_on_table = `
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
`;

var all_links = [], add;
const addToPage = () => {
    
    len = links.length;
    add = ``;

    if(len == 0){
        add += `<tr>
        <td style ="font-family: 'Nunito', sans-serif; width: 30%; padding-left: 0px; color: #dbdbdb; font-weight: 500; font-size: 18px;">No Links.</td>
    </tr>`;
    } else {
        for(let i=0 ; i<len ; i++){
            link_on_table = `
                <tr>
                    <td id="link${i}" style ="font-family: 'Nunito', sans-serif; width: 30%; padding-left: 0px; color: #dbdbdb; font-weight: 500; font-size: 18px;">${(links[i].length <= 20) ? links[i] : links[i].slice(0, 20) + "..."}</td>
                    <td class="site-link-cnt"><a href="${links[i]}" target="_blank" class = "site-links">Go</a></td>
                    <td class="copy-link" id = "${i}" onclick="handleCopyTextFromParagraph(this.id)">Copy</td>
                </tr>`;
                    
            add += link_on_table
        }
    }

    document.getElementById("table").innerHTML = add;
}

const removeNewLine = (txt) => {
    
    var l = txt.length;
    var str = "";
    for(let i=0 ; i<l ; i++){
        if(txt[i] == "\n"){
            str += " ";
        }else {
            str += txt[i];
        }
    }

    return str;
    
}

const showAllPreviousLinks = () => {
    currentClicked = 'btn2';
    document.getElementById("copy-all-btn").innerText = "Copy All";
    len = all_links.length;
    document.getElementById("table").innerHTML = "";
    add = '';

    if(len == 0){
        add += `<tr>
        <td style ="font-family: 'Nunito', sans-serif; width: 30%; padding-left: 0px; color: #dbdbdb; font-weight: 500; font-size: 18px;">No Links.</td>
    </tr>`;
    } else {
        // Loop for  inner_link list
        for(let i=0 ; i<len ; i++){
            link_on_table = `
                <tr>
                    <td style ="font-family: 'Nunito', sans-serif; width: 30%; padding-left: 0px; color: #dbdbdb; font-weight: 500; font-size: 18px;">${(all_links[i].length <= 20) ? all_links[i] : all_links[i].slice(0, 20) + "..."}</td>
                    <td class="site-link-cnt"><a href="${all_links[i]}" target="_blank" class = "site-links">Go</td>
                    <td class="copy-link" id = "${i}" onclick="handleCopyTextFromParagraph(this.id)">Copy</td>
                </tr>`;
                
                add += link_on_table
        }
    }
    
    document.getElementById("table").innerHTML = add;  
}


function handleCopyTextFromParagraph(i) {
    
    let copyText = links[parseInt(i)];
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', copyText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);


    var n = links.length;
    for(let k=0 ; k<n  ; k++){
        document.getElementById(k).innerText = "Copy";
        document.getElementById(k).style.background = "#ffdead24";
        document.getElementById(k).style.color = "#e9967a";
    }

    document.getElementById(i).innerHTML = "&nbsp;Copied!&nbsp;";
    document.getElementById(i).style.background = "#d2b48c";
    document.getElementById(i).style.color = "black";
}


function copyAll() {
    
    var copyAllText = "";
    var n = 0;
    if(currentClicked == 'btn1'){
        n = links.length;
        for(let j=0 ; j<n ; j++){
            copyAllText += `Link - ${j+1} \n` + links[j] + "\n\n";
        }
    }

    
    else if (currentClicked == 'btn2'){
        n = all_links.length;
        for(let j=0 ; j<n ; j++){
            copyAllText += `Link - ${j+1} \n` + all_links[j] + "\n\n";
        }
    }
    

    let inputElement2 = document.createElement('textarea');
    inputElement2.appendChild(document.createTextNode(copyAllText));
    document.body.appendChild(inputElement2);
    inputElement2.select();
    document.execCommand('copy');
    inputElement2.parentNode.removeChild(inputElement2);

    document.getElementById("copy-all-btn").innerHTML = "&nbsp;Copied!&nbsp;";
    
}


