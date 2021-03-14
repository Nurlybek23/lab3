function change(element) {
    var a = element.innerHTML;
    var img = document.getElementById("img");
    var h1 = document.getElementById("h1")
    var text = document.getElementById("text")
    switch(a) {
        case "Coffee":
            img.src = "1.png";
            img.style.width = "300px";
            img.style.left = "100px";
            
            h1.innerHTML = "Coffee";
            text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam vero at unde ut harum cumque suscipit, eius distinctio amet saepe provident animi, optio accusamus? Deserunt non similique molestiae perferendis rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum ab, aliquam quaerat sint laudantium impedit deserunt amet consequatur vero rerum, neque mollitia, id quas reprehenderit incidunt nisi perspiciatis a.";
            break;
        case "Order Online":
            img.src = "2.png";
            img.style.width = "300px";
            img.style.left = "100px";
            
            h1.innerHTML = "Order Online";
            text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam vero at unde ut harum cumque suscipit, eius distinctio amet saepe provident animi, optio accusamus? Deserunt non similique molestiae perferendis rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum ab, aliquam quaerat sint laudantium impedit deserunt amet consequatur vero rerum, neque mollitia, id quas reprehenderit incidunt nisi perspiciatis a. <br><br> Deserunt non similique molestiae perferendis rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum ab, aliquam quaerat sint laudantium impedit deserunt amet consequatur vero rerum, neque mollitia, id quas reprehenderit incidunt nisi perspiciatis a.";
            break;
        case "About us":
            img.src = "1.png";
            img.style.width = "300px";
            img.style.left = "100px";
            
            h1.innerHTML = "About us";
            text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam vero at unde ut harum cumque suscipit, eius distinctio amet saepe provident animi, optio accusamus? Deserunt non similique molestiae perferendis rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum ab, aliquam quaerat sint laudantium impedit deserunt amet consequatur vero rerum, neque mollitia, id quas reprehenderit incidunt nisi perspiciatis a. <br><br Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum et doloribus repudiandae, libero minus labore. Neque, ad, recusandae? Iste enim dolorum reiciendis nisi ex suscipit quia architecto eius incidunt magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis rerum, distinctio perferendis quasi quam, sit aperiam assumenda obcaecati repellat neque nulla numquam velit, commodi in vel est alias dignissimos aliquam.>";
            break;
        case "Contacts":
            img.src = "1.png";
            img.style.width = "300px";
            img.style.left = "100px";
            
            h1.innerHTML = "Contacts";
            text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam vero at unde ut harum cumque suscipit, eius distinctio amet saepe provident animi, optio accusamus? Deserunt non similique molestiae perferendis rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi harum ab, aliquam quaerat sint laudantium impedit deserunt amet consequatur vero rerum, neque mollitia, id quas reprehenderit incidunt nisi perspiciatis a. <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sit, dolores repellendus perferendis dicta culpa aut quisquam laboriosam voluptates, iusto. Corrupti quibusdam ipsam, ea? Porro iusto voluptas esse nulla exercitationem! ><br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ullam vel alias iure, rem reprehenderit aliquam. Possimus consequatur eaque explicabo recusandae sit quas fugiat perspiciatis necessitatibus blanditiis voluptatibus, error eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nulla odit ipsum doloribus obcaecati alias quia nisi voluptas? Nihil architecto blanditiis recusandae officiis, impedit accusamus? Veniam quam sint earum magni!";
            break;
    }
    
    
}
           
function big(element) {
    element.style.fontSize = "25px";
}

function small(element) {
    element.style.fontSize = "20px"; 
}