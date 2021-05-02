var menu_list_items = ["Hawaiien Pizza","Chicken Tandoori","Peperonni Pizza"
,"Meat Lovers Pizza"];
var new_menu_item;

function run()
{ 
    document.getElementById("menu_list_items").innerHTML = menu_list_items;
}

function add_new_menu_item()
{
new_menu_item = document.getElementById("new_menu_item").value;
menu_list_items.push(new_menu_item);
document.getElementById("menu_list_items").innerHTML = menu_list_items;
}