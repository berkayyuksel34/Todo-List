// deger = document;
// deger = document.all;
// deger = document.all.length;
// deger = document.all[6];

// console.log(deger); 

// const elemanlar = document.all;
// For ile HtmlCollection objesi içerisinde dolaşma

// for(let i=0; i < elemanlar.length; i++) {
//     console.log(`Eleman indeks değeri ${i} :`);
//     console.log(elemanlar[i]);
// }

// ForEach ile html collection objesi içerisinde dolanma.

// const collection = new Array(document.all);
// collection.forEach(function(collection){
//     console.log(collection)
// })

// let value;

// value = document.body;
// value = document.head.outerText; // title a erişme
// value = document.URL; // Url erişme

// Scriptler

// value = document.scripts;
// value = document.scripts.length;
// value = document.scripts[0].src;

// Linkler 
// .getAttribute("class") methodu ile class ve başka özellikler alınabilir

// value = document.links;
// value = document.links[0];
// value = document.links[document.links.length -1].getAttribute("class");
// value = document.links[document.links.length -1].getAttribute("href");
// value = document.links[document.links.length -1].className; // class ismini görme
// value = document.links[5].classList; // tüm clasları görme   


// Formlar 
// .getAttribute("method") gibi kullanımlarla da özellikleri çağırılabilir
// value = document.forms;
// value = document.forms[0];
// value = document.forms["form"]; // name ile formu seçme
// value = document.forms["form"].id; // form id getirme.
// value = document.forms[0].method; // formun defaultu get
// console.log(value);


// Element Seçme

// ID'ye göre elementi seçme

// let elements;

// elements = document.getElementById("todo-form"); //ile değeri ile seçtim
// elements = document.getElementById("task-title");


// Class'a göre seçme (array olarak döner)

// elements = document.getElementsByClassName("list-group-item")[0];

// Etiket Tag ile elemanları seçme. Birden fazla tag olacağından array döner.

// elements = document.getElementsByTagName("li");
// elements = document.getElementsByTagName("div");

// Query Selector - Css Selector gibi
// Dezavantajı tek bir elemanı seçmesi. 
// Classa göre seçim yapmak istersek kullanamıyoruz.
// Query Selector tek bir element döner.

// elements = document.querySelector("#todo-form");
// elements = document.querySelector("#task-title");
// elements = document.querySelector(".list-group-item"); // class ismi tutan ilk buldğnu getirir.

// Query Selector ile birden fazla veri almak için
// QuerySelectorAll Kullanabiliriz.
// Array olarak döner   
// forEach rahatlıkla kullanılabilir gezmek için.

// elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(el) {
//     console.log(el);
// })
// console.log(elements);

// Todo Projemiz Başlıyor
// const deleteButton = document.querySelector("#clear-todos");
//const deleteButton = document.querySelector("#clear-todos").textContent;
//const deleteButton = document.querySelector("#clear-todos").innerHTML;

// textContent elementin içerisindeki yalnızca text olan kısmı alır.
// içerisindeki html etiketleri dahil şekilde alır.
// console.log(deleteButton);
// console.log(deleteButton.href);
// console.log(deleteButton.style);

// console.log(deleteButton);

// Style ve Element Özellikleri Değiştirmek

// deleteButton.className = "btn btn-warning"; // class değişti
// deleteButton.textContent = "Değişen Metin"; // metin değişti
// deleteButton.style.color = "#fff"; // metin rengi değişti
// deleteButton.style.margin = "5rem"; // margin verme
// deleteButton.href = "https://google.com.tr";
// deleteButton.target = "_blank";
// deleteButton.innerHTML = "<span style='color:black; font-weight:bold;'>Sil Canımın İçi</span>"

// Tüm Elemanlara Stil Verme

// const elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(todolar){
//     todolar.style = "background : #eee; color:red;"
// });

// Css selektörleri kullanma

// let lastCocuk = document.querySelector("li:last-child"); 
// lastCocuk = document.querySelector("li:nth-child(2)");
// lastCocuk = document.querySelectorAll("li:nth-child(odd)"); //numrası tek olanarı seç
// lastCocuk = document.querySelectorAll("li:nth-child(even)"); // numarası çift olanları seç

// lastCocuk.forEach(function(el){
//     el.style = "background: #eee; border-left: 2px solid black;"
// });

// let value;

// const todoList = document.querySelector(".list-group");
// const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardrow = document.querySelector(".card.row");

// // Child Nodes // Text Dail Nodelar

// // value=todoList.childNodes; // boş satırlar da node olarak sayılarak gelir.
// // value=todoList.childNodes[0]; 

// // Children Sadece element olanlar döner.

// // value = todoList.children;
// // value = todoList.children[0];


// cardrow.children[2].children[1].textContent="Burası da Değişti Mi Acaba ";


// value = todoList.firstElementChild; // ilk child
// value = todoList.lastElementChild; // son child
// value = todoList.children.length;
// value = todoList.childElementCount; // kaç tane child var

// value = cardrow.parentElement; //ebevenyi seçme
// value = cardrow.parentElement.parentElement; // ebeveynin ebeveynini seçme


// // Element Kardeşleri Siblings

// value = todo.previousElementSibling; // bir önceki kardeş elemente git
// value = todo.nextElementSibling; // bri sonrakiş kardeşe git.
// value = todo.nextElementSibling.nextElementSibling; // 2 sonraki kardeşe git
// console.log(value);


/////////////
// Dinamik Element Oluşturma
////////////

// <a id= "clear-todos" class="btn btn-outline-danger w-50" href="#">Tüm Yapılacakları Temizleyin</a>

// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1].children[3];


// newLink.id="clear-todos";
// newLink.className="btn btn-outline-danger w-25";
// // newLink.textContent="Yeni Buton";
// // Text Node olarak eklemek daha sağlıklı
// newLink.appendChild(document.createTextNode("Yeni Buton"));
// newLink.href="#";
// newLink.target="_blank"


// cardbody.appendChild(newLink);
// console.log(cardbody);

/////////////
// Dinamik Element Silme
////////////

// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");

// console.log(todoList);
// console.log(todos);

// Remove Methodu

// todos[0].remove();

// Remove Child

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[0]);

/////////////
// Elementleri Birbirleriyle Değiştirme
////////////

// Replace
// <h5 class="card-title" id="task-title">Yapılacaklar</h5>

// const cardbody = document.querySelectorAll(".card-body")[1];
// const newElement = document.createElement("h3");

// newElement.innerText = "Yeni Başlık";
// newElement.id = "task-title";
// newElement.className = "card-title";

// Eski Element

// const eskiElement = document.querySelector("#task-title");

// Replace işlemi

// cardbody.replaceChild(newElement,eskiElement);

// console.log(newElement);


// Attribute Değiştirme ve Silme.

// const todoInput = document.querySelector("#todo");
// const todoInput = document.getElementsById("todo");

// todoInput.className = "var olan class yeni class";
// todoInput.classList.add("yeni-class");
// todoInput.classList.remove("silinecek-class");
// todoInput.setAttribute("placeholder","Yeni Place Holder"); 
// todoInput.removeAttribute("name");  
// olmayan bir attribute de eklenebilir bu şekilde
// remove iel de silinebilir

// let element;

// element = todoInput;
// element = todoInput.placeholder;
// element = todoInput.getAttribute("placeholder");
// element = todoInput.hasAttribute("name"); 
// sorulan attribute var mı? yoksa false dönecek
// döngülerde kullanmak için

// console.log(element);


/////////////
// Dom Eventleri Event Listener
////////////

// const filterInput = document.getElementById("filter");
// const todoForm = document.getElementById("todo-form");

// eski yöntem 

// filterInput.onfocus = function() { //focus olduğunda fonksiyon çalışır
//     console.log("Focus Olduk");
// }

// filterInput.addEventListener("focus",function(e) {
//     //console.log(e); // event objesi özellikleri
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
//     // console.log("Buraya ne yazdım ben");
// });

// todoForm.addEventListener("submit", submitForm);

// function submitForm(e) {
//     console.log("Submit Eventi")
//     e.preventDefault(); // yenilenme eventini devredışı bıraktık
//     // preventDefault : Bu fonksiyon çağrıldığında oluşan eventin işlevini geçersiz kılar.
//     // Örneğin bir linke tıkladığınızdaki click eventini, formu submit ettiğimizde onsubmit eventini preventDefault metodunu kullanarak geçersiz kılabiliriz.
// };

// Klavye Eventleri


// keypress
// yalnızca harfler ve sayılar event oluşturur.
// yukarı aşağı insert vs oluşturmaz.
// document.addEventListener("keypress", run);

// function run(e) {
//     //console.log(String.fromCharCode(e.which)); //hangi tuşa basıldı
//     // daha hızlı bir yöntem
//     console.log(e.key); // başılan tuşu direkt verir
//      //console.log("Key Press");
// }

// keydown
// tüm tuşlar eventi tetikler. 
// shift enter backspace vs hepsi

// document.addEventListener("keydown", run1);

// function run1(e) {
//     console.log(e.key);
// }

// key up
// keydowndan tek farkı 
//tuşu bıraktığınızda event oluşur

// document.addEventListener("keyup", run2);

// function run2(e) {
//     console.log(e.key);
// }

// const cardheader = document.querySelector(".card-header");
// const cardInput = document.querySelector("#todo");

// cardInput.addEventListener("keyup", degistir);

// function degistir(e) {
//     cardheader.innerText = e.target.value;
//     if(e.target.value == "") {
//         cardheader.innerText = "Yapılacak Giriniz";
//         // boşken default metin oluşturduk
//     }
// }

///////////
/// Mouse Eventleri
///////////

// const cardbody = document.querySelectorAll(".card-body")[1];
// const title = document.querySelector("#task-title");

// Click Eventi

// cardbody.addEventListener("click", tikladi);

// function tikladi(e){
//     console.log("Click Eventi");
// }

// cardbody.addEventListener("dblclick", tikladi);

// function tikladi(e){
    // çift tıklama için dblclick
// }

// Mouse Down 
//bastığımızda ve tuttuğumuzda çalışır 
// click basar basmaz çalışır

// cardbody.addEventListener("mousedown", tikladi2);

// function tikladi2(e){
//     console.log("Mouse Down");
// }

// Mouse up
// key up gibi mouse bırakılınca aktif olur
// mouse basılıyken element dışında bırakılırsa aktif olmaz

// cardbody.addEventListener("mouseup", tikladi3);

// function tikladi3(e){
//     console.log("Mouse Up");
// }

// Mouse Over

// cardbody.addEventListener("mouseover", tikladi4);

// function tikladi4(e){
//     console.log("Mouse Over");
// }

// Mouse Out

// cardbody.addEventListener("mouseout", outE);

// function outE(e){
//     console.log("Mouse Out");
// }

// Mouse Whell

// cardbody.addEventListener("mousewheel", wheelFonk);

// function wheelFonk(e) {
//     console.log("Mouse Wheel");
// }

// Mouse Enter ve Leave
// over ve out aksine sadece girdiğinde çalışır
// elementin üzerinde dolaşırken oluşmaz

// cardbody.addEventListener("mouseenter", entrM);

// function entrM(e) {
//     console.log(e.type);
// };
// cardbody.addEventListener("mouseleave", leaveM);

// function leaveM(e) {
//     console.log(e.type);
// };

/////////////////////
/// Input Event
////////////////////

// const filter = document.querySelector("#filter");

// document.addEventListener("DOMContentLoaded", loadd);
// function loadd(e) {
//     console.log("Sayfa tamamen yüklendi");
//     console.log(e.type);
// }

// Tüm Input Eventleri

// filter.addEventListener("focus", fonks);
// // Odaklanma
// filter.addEventListener("blur", fonks);
// // Odaktan çıkma
// filter.addEventListener("paste", fonks);
// // yapıştırma
// filter.addEventListener("copy", fonks);
// // kopyalama
// filter.addEventListener("cut", fonks);
// // kesme
// filter.addEventListener("select", fonks);
// // seçme

// function fonks(e) {
//     console.log(e.type)
// };

/////////////////////
/// Event Bubbling ve Capturing
////////////////////

// Event Bubbling
// Event child dan parent a doğru kabarcıklanır

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Container Div");
// });
// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
// });
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
// });

// Event Capturing veya Event Delegation

// const cardbody = document.querySelectorAll(".card-body")[1];

// cardbody.addEventListener("click", run);

// function run(e){
//     if(e.target.className === "fa fa-remove") {
//         console.log("Silme İşlemi");
//     }
//     if(e.target.id === "filter"){
//         console.log("Filtreleme İşlemi");
//     }
//     if(e.target.id === "clear-todos"){
//         console.log("Tüm To-Do'ları Sil İşlemi");
//     }
// }

/////////////
/// Session  ve Local Storage
//////////////

// Session - Key ve Value
// Session html dosyasına göre buradaki işlemler.
// Session storage sekme ya da browser kapandığında silinir.

// Butonları Seçelim

// const addButon = document.querySelector("#add");
// const deleteButon = document.querySelector("#delete");
// const clearButon = document.querySelector("#clear");

// Inputları Seçelim

// const addkey =  document.querySelector("#addkey");
// const addvalue =  document.querySelector("#addvalue");
// const deletekey =  document.querySelector("#deletekey");

// addButon.addEventListener("click", addItem);
// deleteButon.addEventListener("click", deleteItem);
// clearButon.addEventListener("click", clearItems);

// Fonksiyonları Yazalım

// function addItem(e){
//     sessionStorage.setItem(addkey.value,addvalue.value);
// }
// function deleteItem(e){
//     sessionStorage.removeItem(deletekey.value);
// }
// function clearItems(e){
//     sessionStorage.clear();
// }

// Local Storage

// Kayıt
// localStorage.setItem("key","value");
// localStorage.setItem("berkay","deger");
// Değer Okuma
// localStorage.getItem("berkay");
// Temizleme
// localStorage.clear();
// Arama Yapma
// if(localStorage.getItem("berkay")=== null) {
//     console.log("Sorgulanan değer local storagede yok");
// }

// Local Storage Array Yazdırma

// const todos = ["Todo1", "Todo2", "Todo3"];
// localStorage.setItem("todos", JSON.stringify(todos));
// JSON.strigify ile array gibi yazdık
// console.log(JSON.parse(localStorage.getItem("todos"))[1]);
// JSON.parse ile arrayi'i string parse ettik. ve index değerleri ile veri aldık

// const form = document.querySelector("#todo-form");
// const todoInput = document.querySelector("#todo");

// form.addEventListener("submit", addTodo);

// function addTodo(e){
//     const value = todoInput.value;
//     let todos;

//     if(localStorage.getItem("todos") === null) {
//         todos = [];
        // eğer todos local storage'de yoksa
        // todos değişkenini boş bir array yap.
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"))
         // eğer local storage'de todos varsa
         //todos değişkenine array'i parse ederek ekle.
//     }

//     todos.push(value);
        //todos arrayine value değerini push et

//     localStorage.setItem("todos", JSON.stringify(todos));
        // todos arrayindeki veriyi strigify ile array biçiminde
        // local storage'e yaz

//     e.preventDefault();
    // sayfanın yenilenmesini önlemek için. 
// }

//////////////////////////
///// TODO PROJE ////////
////////////////////////


// Seçimler

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

// Todos yoksa ilk önce ekle sonra sorun çıkartıyor.

if(localStorage.getItem("todos") === null) {
    localStorage.setItem("todos","");
}
    
eventListener();

// Event Ekleme
// Tüm event listenerları atama

function eventListener() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
};
function clearAllTodos(){
    if(confirm("Tümünü Silmek İstediğine Emin Misin?")) {
        // todoList.innerHTML = ""; // yavaş bir yöntem
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
        localStorage.setItem("todos","");
    }

}
function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1) {
            // eğer yoksa -1 döner
            listItem.setAttribute("style","display : none !important");
        } else {
            listItem.setAttribute("style","display : block");
        }
    });
};


function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo=== deletetodo) {
            todos.splice(index,1); // arrayden değerimizi sildik
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteTodo(e){
    if(e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        showAlert("success","Todo Başarıyla Silindi...");
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    }
}
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

function addTodo(e){
    const newTodo = todoInput.value.trim(); // boşlukları aldık trim ile
    if (newTodo === "") {
        showAlert("danger","Lütfen Todo Girininiz...");
    } else {
        addTodoToUI(newTodo);
        addTodoToLocalStorage(newTodo);
        showAlert("info","Todo Başarılı Bir Şekilde Eklendi !");
    }
    

    e.preventDefault();
};

function showAlert(type,message) {
    //         <div class="alert alert-danger" role="alert">
    //          Alert Mesajı
    //          </div>

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.setAttribute("role","alert");
    alert.appendChild(document.createTextNode(message));
    firstCardBody.appendChild(alert);
    // setTimeOut belli bi saniye sonra görev oluşturma
    setTimeout(function(){
        alert.remove();
    },1500);
}
function addTodoToUI(newTodo) { // string değeri list item olarak ekleyecek
    
    // list item oluşturma
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between fs-5";

    // link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    // Text Node 
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //HTML e ekleme
    todoList.appendChild(listItem);
    todoInput.value = ""; // todo input value sıfırlama
};

function getTodosFromStorage() { // storage den todoları alma
    let todos;

    if(localStorage.getItem("todos") === "") {
    todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToLocalStorage(newTodo) { 
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
        
}
