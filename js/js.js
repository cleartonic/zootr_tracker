
$(document).ready(function(){
// const params = new Proxy(new URLSearchParams(window.location.search), {
  // get: (searchParams, prop) => searchParams.get(prop),
// });

// let user = params.user; // "some_value"
// let music_user = music_data[user];


$('#first_button').append('Click to open tracker (popout)');
    
$(function() { 
    $('#first_button').click(function() {
        window.open(`tracker.html`, '_blank', `width=480, height=760, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`);
    
    }).change(); // Trigger the event
});

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

// bootup
var items = $('img')
$.each( $('img'), function(idx) {
    img = items[idx];
    $(img).css("opacity",".3");
    });

var dungeon_list = ['???','Deku','Dodongo','Jabu','Forest','Fire','Water','Shadow','Spirit','Free']

var key_array = {
    "forest_key" : 5,
    "fire_key" : 8,
    "water_key" : 6,
    "shadow_key" : 5,
    "spirit_key" : 5,
    "ganon_key" : 2,
    "botw_key" : 9,
    "fortress_key" : 4,
    "gtg_key" : 3    
}


var item_dict = {
    "fairyocarina" : "fairyocarina",
    "ocarina" : "fairyocarina",
    "ocarina1" : "fairyocarina",
    "ocarina2" : "fairyocarina",
    "strength" : "lift1",
    "strength1" : "lift1",
    "str" : "lift1",
    "s" : "lift1",
    "strength2" : "lift1",
    "strength3" : "lift2",
    "magic" : "magic",
    "m" : "magic",
    "bombs" : "bomb",
    "bomb" : "bomb",
    "b" : "bomb",
    "scale" : "scale1",
    "scale2" : "scale1",
    "sc" : "scale1",
    "goldscale" : "scale1",
    "slingshot" : "slingshot",
    "ss" : "slingshot",
    "boomerang" : "boomerang",
    "bm" : "boomerang",
    "dins" : "din",
    "din" : "din",
    "egg" : "egg",
    "wallet" : "wallet",
    "redtunic" : "redtunic",
    "bluetunic" : "bluetunic",
    "bottle" : "bottle",
    "bot" : "bottle",
    "letter" : "bottle",
    "let" : "bottle",
    "emerald" : "emerald-small",
    "ruby" : "ruby-small",
    "sapphire" : "sapphire-small",
    "em" : "emerald-small",
    "rub" : "ruby-small",
    "saph" : "sapphire-small",
    "hookshot" : "hookshot",
    "longshot" : "hookshot",
    "hs" : "hookshot",
    "ls" : "hookshot",
    "bow" : "bow",
    "firearrow" : "firearrow",
    "lightarrow" : "lightarrow",
    "lights" : "lightarrow",
    "fa" : "firearrow",
    "la" : "lightarrow",
    "boots" : "ironboots",
    "irons" : "ironboots",
    "ib" : "ironboots",
    "hovers" : "hoverboots",
    "hb" : "hoverboots",
    "hoverboots" : "hoverboots",
    "hammer" : "hammer",
    "ham" : "hammer",
    "mirrorshield" : "shield3",
    "ms" : "shield3",
    "mirror" : "shield3",
    "claim" : "claim",
    "" : "",

    "zelda" : "zelda",
    "epona" : "epona",
    "saria" : "saria",
    "zel" : "zelda",
    "epo" : "epona",
    "sar" : "saria",
    "sunsong" : "sunsong",
    "suns" : "sunsong",
    "sun" : "sunsong",
    "songoftime" : "songoftime",
    "songofstorms" : "songofstorms",
    "sot" : "songoftime",
    "storms" : "songofstorms",
    "sos" : "songofstorms",
    "minuet" : "green_note",
    "bolero" : "red_note",
    "serenade" : "blue_note",
    "nocturne" : "purple_note",
    "requiem" : "orange_note",
    "prelude" : "yellow_note",
    "min" : "green_note",
    "bol" : "red_note",
    "ser" : "blue_note",
    "noc" : "purple_note",
    "req" : "orange_note",
    "pre" : "yellow_note",


    "forestmedallion" : "forestmedallion",
    "firemedallion" : "firemedallion",
    "watermedallion" : "watermedallion",
    "shadowmedallion" : "shadowmedallion",
    "spiritmedallion" : "spiritmedallion",
    "lightmedallion" : "lightmedallion",

    "forestm" : "forestmedallion",
    "firem" : "firemedallion",
    "waterm" : "watermedallion",
    "shadowm" : "shadowmedallion",
    "spiritm" : "spiritmedallion",
    "lightm" : "lightmedallion",

    "forestmed" : "forestmedallion",
    "firemed" : "firemedallion",
    "watermed" : "watermedallion",
    "shadowmed" : "shadowmedallion",
    "spiritmed" : "spiritmedallion",
    "lightmed" : "lightmedallion",

    
    "mforest" : "forestmedallion",
    "mfire" : "firemedallion",
    "mwater" : "watermedallion",
    "mshadow" : "shadowmedallion",
    "mspirit" : "spiritmedallion",
    "mlight" : "lightmedallion",

    "mfor" : "forestmedallion",
    "mfir" : "firemedallion",
    "mwat" : "watermedallion",
    "mshad" : "shadowmedallion",
    "mspir" : "spiritmedallion",
    "msha" : "shadowmedallion",
    "mspi" : "spiritmedallion",
    "mlig" : "lightmedallion",
    
    "forestkey" : "forest_key",
    "forkey" : "forest_key",
    "keyforest" : "forest_key",
    "keyfor" : "forest_key",

    "firekey" : "fire_key",
    "firkey" : "fire_key",
    "keyfire" : "fire_key",
    "keyfir" : "fire_key",
    
    "waterkey" : "water_key",
    "watkey" : "water_key",
    "keywater" : "water_key",
    "keywat" : "water_key",
    
    "shadowkey" : "shadow_key",
    "shadkey" : "shadow_key",
    "keyshadow" : "shadow_key",
    "keyshad" : "shadow_key",
    
    "spiritkey" : "spirit_key",
    "spirkey" : "spirit_key",
    "keyspirit" : "spirit_key",
    "keyspir" : "spirit_key",
    
    "ganonkey" : "ganon_key",
    "gankey" : "ganon_key",
    "keyganon" : "ganon_key",
    "keygan" : "ganon_key",
    
    "botwkey" : "botw_key",
    "wellkey" : "botw_key",
    "keybotw" : "botw_key",
    "keywell" : "botw_key",
    
    "fortresskey" : "fortress_key",
    "fortkey" : "fortress_key",
    "keyfortress" : "fortress_key",
    "keyfort" : "fortress_key",
    
    "gtgkey" : "gtg_key",
    "keygtg" : "gtg_key",



    
    "bkeyforest" : "forest_bkey",
    "bkeyfire" : "fire_bkey",
    "bkeywater" : "water_bkey",
    "bkeyshadow" : "shadow_bkey",
    "bkeyspirit" : "spirit_bkey",
    "bkeyganon" : "ganon_bkey",
    
    
    "bosskeyforest" : "forest_bkey",
    "bosskeyfire" : "fire_bkey",
    "bosskeywater" : "water_bkey",
    "bosskeyshadow" : "shadow_bkey",
    "bosskeyspirit" : "spirit_bkey",
    "bosskeyganon" : "ganon_bkey",
    "bosskeyganons" : "ganon_bkey",

    "bkeyfor" : "forest_bkey",
    "bkeyfir" : "fire_bkey",
    "bkeywat" : "water_bkey",
    "bkeyshad" : "shadow_bkey",
    "bkeyspir" : "spirit_bkey",
    "bkeygan" : "ganon_bkey",
    "bkeygan" : "ganon_bkey",

    "forestbkey" : "forest_bkey",
    "firebkey" : "fire_bkey",
    "waterbkey" : "water_bkey",
    "shadowbkey" : "shadow_bkey",
    "spiritbkey" : "spirit_bkey",
    "ganonbkey" : "ganon_bkey",
    "ganonsbkey" : "ganon_bkey",


    "forestbosskey" : "forest_bkey",
    "firebosskey" : "fire_bkey",
    "waterbosskey" : "water_bkey",
    "shadowbosskey" : "shadow_bkey",
    "spiritbosskey" : "spirit_bkey",
    "ganonbosskey" : "ganon_bkey",
    "ganonsbosskey" : "ganon_bkey",


    "forbkey" : "forest_bkey",
    "firbkey" : "fire_bkey",
    "watbkey" : "water_bkey",
    "shadbkey" : "shadow_bkey",
    "spirbkey" : "spirit_bkey",
    "ganbkey" : "ganon_bkey",

    
}




var item_cleanup_dict = {
    "lift1" : "Progressive Strength",
    "lift2" : "Progressive Strength",
    "lift3" : "Progressive Strength",
    "fairyocarina" : "Ocarina Upgrade",
    "ocarina" : "Ocarina of Time",
    "magic" : "Magic",
    "bomb" : "Bombs",
    "scale1" : "Progressive Scale",
    "scale2" : "Progressive Scale",
    "slingshot" : "Slingshot",
    "boomerang" : "Boomerang",
    "din" : "Din's Fire",
    "egg" : "Weird Egg",
    "redtunic" : "Red Tunic",
    "bluetunic" : "Blue Tunic",
    "wallet" : "Adult's Wallet",
    "bottle" : "Bottle",
    "letter" : "Letter",
    "emerald-small" : "Kokiri Emerald",
    "ruby-small" : "Goron Ruby",
    "sapphire-small" : "Zora's Sapphire",
    "hookshot" : "Progressive Hookshot",
    "longshot" : "Progressive Hookshot",
    "bow" : "Bow",
    "firearrow" : "Fire Arrows",
    "lightarrow" : "Light Arrows",
    "ironboots" : "Iron Boots",
    "hoverboots" : "Hover Boots",
    "hammer" : "Hammer",
    "shield3" : "Mirror Shield",
    "claim" : "Claim Check",
    "zelda" : "Zelda's Lullaby",
    "epona" : "Epona's Song",
    "saria" : "Saria's Song",
    "sunsong" : "Sun's Song",
    "songoftime" : "Song of Time",
    "songofstorms" : "Song of Storms",
    "green_note" : "Minuet of Forest",
    "red_note" : "Bolero of Fire",
    "blue_note" : "Serenade of Water",
    "purple_note" : "Nocturne of Shadow",
    "orange_note" : "Requiem of Spirit",
    "yellow_note" : "Prelude of Light",

    "forestmedallion" : "Forest Medallion",
    "firemedallion" : "Fire Medallion",
    "watermedallion" : "Water Medallion",
    "shadowmedallion" : "Shadow Medallion",
    "spiritmedallion" : "Spirit Medallion",
    "lightmedallion" : "Light Medallion",

    "forest_key" : "Forest Key",
    "fire_key" : "Fire Key",
    "water_key" : "Water Key",
    "shadow_key" : "Shadow Key",
    "spirit_key" : "Spirit Key",
    "ganon_key" : "Ganon's Key",
    "botw_key" : "BOTW Key",
    "fortress_key" : "Fortress Key",
    "gtg_key" : "GTG Key",

    "forest_bkey" : "Forest Boss Key",
    "fire_bkey" : "Fire Boss Key",
    "water_bkey" : "Water Boss Key",
    "shadow_bkey" : "Shadow Boss Key",
    "spirit_bkey" : "Spirit Boss Key",
    "ganon_bkey" : "Ganon Boss Key",


    
}



var key_dict = {
    "forest" : "forest_key",
    "fire" : "fire_key",
    "water" : "water_key",
    "shadow" : "shadow_key",
    "spirit" : "spirit_key",
    "ganons" : "ganon_key",
    "ganon" : "ganon_key",
    
    
}


var area_dict = {
    'deku' : "Deku Tree",
    'dc' : "Dodongo's Cavern",
    'jabu' : "Jabu Jabu's Belly",
    'botw' : "Bottom of the Well",
    'well' : "Bottom of the Well",
    'dmc' : "D. Mountain Crater",
    'dmt' : "D. Mountain Trail",
    'desert' : "Desert Colossus",
    'colossus' : "Desert Colossus",
    'fire' : "Fire Temple",
    'forest' : "Forest Temple",
    'ganonout' : "Ganon's Exterior",
    'ganon' : "Ganon's Castle",
    'ganons' : "Ganon's Castle",
    'ganontower' : "Ganon's Tower",
    'fortress' : "Gerudo Fortress",
    'gtg' : "G. Training Grounds",
    'goron' : "Goron City",
    'graveyard' : "Graveyard",
    'wasteland' : "Haunted Wasteland",
    'castle' : "Hyrule Castle",
    'field' : "Hyrule Field",
    'market' : "Hyrule Market",
    'ice' : "Ice Cavern",
    'icecavern' : "Ice Cavern",
    'kak' : "Kakariko Village",
    'kokiri' : "Kokiri Forest",
    'hylia' : "Lake Hylia",
    'lake' : "Lake Hylia",
    'ranch' : "Lon Lon Ranch",
    'lw' : "Lost Woods",
    'lostwoods' : "Lost Woods",
    'meadow' : "S. Forest Meadow",
    'sfm' : "S. Forest Meadow",
    'shadow' : "Shadow Temple",
    'spirit' : "Spirit Temple",
    'temple' : "Temple of Time",
    'water' : "Water Temple",
    'domain' : "Zora's Domain",
    'fountain' : "Zora's Fountain",
    'river' : "Zora's River",

    
}



function toggle_image(cur_div, loc_str = '', num_keys = undefined) {
        var img_path = $(cur_div).attr('src');
        var cur_opacity = $(cur_div).css("opacity");
        
        
        latest_item_from_path = img_path.split("/")[1].split('.')[0];
        
        // check each image 
        
        // STRENGTH
        if (img_path == "img/lift1.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/lift2.png");    
                latest_item_from_path = 'lift2'
            }
        }
        else if (img_path == "img/lift2.png") {
            $(cur_div).attr("src","img/lift3.png");    
            latest_item_from_path = 'lift3'
        }
        else if (img_path == "img/lift3.png") {
            $(cur_div).attr("src","img/lift1.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }
        
        // OCARINA
        else if (img_path == "img/fairyocarina.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/ocarina.png");    
            }    
        }
        else if (img_path == "img/ocarina.png") {
            $(cur_div).attr("src","img/fairyocarina.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }
        
        // SCALE
        else if (img_path == "img/scale1.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/scale2.png");    
            }    
        }
        else if (img_path == "img/scale2.png") {
            $(cur_div).attr("src","img/scale1.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }
        
        // BOTTLE/LETTER
        else if (img_path == "img/bottle.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/bottle-letter.png");    
            }    
        }
        else if (img_path == "img/bottle-letter.png") {
            $(cur_div).attr("src","img/bottle.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }        
        
        // HOOKSHOT
        else if (img_path == "img/hookshot.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/longshot.png");    
            }    
        }
        else if (img_path == "img/longshot.png") {
            $(cur_div).attr("src","img/hookshot.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }        
        
        // SMALLKEY
        else if (img_path == "img/smallkey.png") {
            
            
            
            var key_type = $(cur_div).attr('id');
            var latest_item_from_path = key_type
            
            var counter_div = $(cur_div).parent().children(".key_counter");
            var count = $(counter_div).text();
            

            if (num_keys != undefined) {
                $(cur_div).css("opacity","1");
                counter_div.text(num_keys);
                counter_div.css("opacity","1");              
                
                
            }
            
            else if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
                counter_div.text("1");
                counter_div.css("opacity","1");
            }
            else {
                var key_limit = key_array[key_type];
                var cur_text = parseInt(counter_div.text());

                if (cur_text >= key_limit){
                    $(cur_div).css("opacity",".3");
                    counter_div.text("0");
                    counter_div.css("opacity","0")
                    latest_item_from_path = undefined;
                    
                }
                else {
                    counter_div.text(cur_text + 1);
                }
            }    
        }

        

        // DEFAULT
        
        else {
        
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).css("opacity",".3"); 
                latest_item_from_path = undefined;                
            }
        }    
    
    
        // boss key id for log
        
        if (latest_item_from_path == "bosskey") {
            var key_type = $(cur_div).attr('id');
            var latest_item_from_path = key_type
        };
    
        // console.log(latest_item_from_path)
        var final_item = item_cleanup_dict[latest_item_from_path];
        if (final_item != undefined) {
            update_log("Get: " + final_item + loc_str);
        }
    
}



function update_log(log_text, color = undefined, notes = false) {

    if (notes || $("#setting_update_log").is(':checked')) {
                
        var cur_html = $("#log_entries_container").html();
        var color_style = '';
        if (color != undefined) {
            color_style = 'color:' + color + ';'
        }
        
        
        // if toggle only notes is on, then do not display new non=notes
        var cur_color = $("#hide-show-log").css("color");
        var display = "";
    
        if (cur_color == "rgb(14, 152, 237)" && (!notes)) {
            display = "display:none;"
            }


        
        $("#log_entries_container").html("<div class = 'log_entry' style = "+color_style+display+">" + log_text + "</div>" + cur_html)
        
        
        var cur_html = $("#log_entries_container")
        var children = $(cur_html).children();
        $.each(children, function (child) {
            
            var child_select = $(children[child]);
            // console.log($(child_select).text())
            
            
            child_select.on("dblclick",
                   function(){ 
                        $(this).remove();
                  });;
            
        });
    };
    
    
}



function clear_log() {
    
    var cur_html = $("#log_entries_container");
    $(cur_html).find('div:first').remove();
};
function clear_log_full() {
    
    $("#log_entries_container").html("");
    
};



function hide_log_non_notes() {
    
    var cur_html = $("#log_entries_container").children();
    
    $.each(cur_html, function(child) { 
        color = $(cur_html[child]).css("color");

        if (color != "rgb(111, 122, 252)") {
            $(cur_html[child]).css("display","none");
            }          
        }
    );
};

function show_log_non_notes() {
    
    var cur_html = $("#log_entries_container").children();
    
    $.each(cur_html, function(child) { 
        color = $(cur_html[child]).css("color");

        if (color != "rgb(111, 122, 252)") {
            $(cur_html[child]).css("display","block");
            }          
        }
    );
};
function clear_log_entry(div) {    

    $(div).remove();            
};



// image click 
$(function() { 
    $('img').click(function() {
        toggle_image(this);
        });
    });
    
    
$(function() { 
    $('#clear-button').dblclick(function() {
        clear_log_full();
        });
    });

$(function() { 
    $('#hide-show-log').dblclick(function() {
        
        var cur_color = $(this).css("color");
        
        if (cur_color == "rgb(82, 12, 120)") {
            hide_log_non_notes();    
            $(this).css("color", "#0e98ed")
            $(this).css("border", "2px dotted #0e98ed")
            $(this).text("Show auto log")
        }
        else {
            show_log_non_notes();    
            $(this).css("color", "#520c78")
            $(this).css("border", "2px dotted #520c78")
            $(this).text("Hide auto log")
        }
        
        
        
        });
    });



$(function() { 
    $('.medallion_text').click(function() {
        
        var text = $(this).text().trim();
        idx = dungeon_list.indexOf(text) + 1
        if (idx == dungeon_list.length) {
            idx = 0
        }
        
        $(this).text(dungeon_list[idx]);
        // // console.log(text)
        });
        });



        

$(function() { 
    $('.key_counter').click(function() {
        var latest_item_from_path = '';
        var loc_str = '';
        var count = $(this).text();
        
        var img_div = $(this).parent().children("img");
        
        var img_path = $(img_div).attr('src');
        var cur_opacity = $(img_div).css("opacity");
        var key_type = $(img_div).attr('id');

        var latest_item_from_path = key_type
 
        if (cur_opacity < 1) {
            img_div.css("opacity","1");
            $(this).text("1");
            $(this).css("opacity","1");
        }
        else {
            var key_limit = key_array[key_type];
            var cur_text = parseInt($(this).text());
            
            if (cur_text >= key_limit){
                img_div.css("opacity",".3");
                $(this).text("0");
                $(this).css("opacity","0")
                latest_item_from_path = undefined;  
            }
            else {
                $(this).text(cur_text + 1);
            }
        }    
        
        var final_item = item_cleanup_dict[latest_item_from_path];
        if (final_item != undefined) {
            
            update_log("Get: " + final_item + loc_str);
            
            
        }

        
    });
    
    
});


// parse inputs 

$('input').keypress(function (e) {
    
    if (e.which == 13) {
        // console.log("Submit\n\n\n")

        original_val = $(e.currentTarget).val();
        cur_val = $(e.currentTarget).val().toLowerCase();

        $(e.currentTarget).val("")


        args = cur_val.split(" ");
        first_arg = args[0];
        // console.log(args);
        
        
        //
        // KEY
        //
        
        if (first_arg == 'key' || first_arg == 'keys' || first_arg == 'k') {
            area = args[1];
            num = args[2];
            
            if (Math.floor(num) == num && $.isNumeric(num)) {
            
                // console.log("KEYS, area: " + area + " num: " + num);
                key_lookup = key_dict[area];
                
                if (key_lookup != undefined) {
                
                    var all_img = $('img');
                    
                    
                    $.each(all_img, function (img) {
                        var src_id = $(all_img[img]).attr("id")
                        if (src_id == key_lookup) {
                            div_match = all_img[img];
                        }
                        });
                        
                    var limit = key_array[key_lookup];
                    if (num > limit) {
                        num = limit;
                    }
                    toggle_image(div_match, '', num); // pass along set number
                    update_log("Keys for " + area.toUpperCase() + " set to " + num);
                };
            }
            else {
                // console.log("Integer not supplied with key argument")
            }
            
        }
      
        //
        // GET
        //
        
        else if (first_arg == 'get') {
            item = args[1];
            loc = args[2];
            // console.log("GET, item: " + item + " loc: " + loc);

            var loc_str = ''
            if (loc != undefined) {
            
                loc_match = area_dict[loc]
                if (loc_match != undefined) {
                    loc_str = ' from ' + loc_match
                }
                else {
                    loc_str = ' from ' + loc
                }
            }
            
            item_lookup = item_dict[item];
            
            if (item_lookup != undefined) {            
                // check for keys first
                
                if (item.indexOf("key") >= 0) {
                    // console.log("KEY")

                    // find matching div for key type
                    var all_img = $('img');
                    
                    $.each(all_img, function (img) {
                        var src_id = $(all_img[img]).attr("id")
                        if (src_id == item_lookup) {
                            // console.log("Key match " + src_id + " " + item_lookup)
                            div_match = all_img[img];
                        }
                        });
                    toggle_image(div_match, loc_str);
                    


                    return false;
                    
                    
                }

                var img_path = "img/" + item_lookup + ".png";

                // default case for toggling images 
                

                var all_img = $('img');
                var div_match = false;
                $.each(all_img, function (img) {
                        var src_img = $(all_img[img]).attr("src")
                        // // console.log(src_img + " " + img_path)
                        if (src_img == img_path) {
                            // console.log("Match " + src_img + " " + img_path)
                            div_match = all_img[img];
                        }
                        });

                
                if (div_match != false) {
                    // custom for letter, do it again
                    if (item == "letter" && $(div_match).css("opacity") < 1) {
                        toggle_image(div_match, loc_str);
                        toggle_image(div_match, loc_str);
                        // update_log("Get: Letter" + loc_str);
                    }
                    else {
                        toggle_image(div_match, loc_str);
                        // update_log("Get: " + item_cleanup_dict[item_lookup] + loc_str);
                    }
                    
                    
                    
                    
                }
                else {
                    var override_flag = false
                    
                    // MANUAL OVERRIDES 
                    if (item == 'str' || item == 's' || item == 'strength' || item == 'strength1' || item == 'strength2') {
                        // console.log("Override for str3");
                        img_path = 'img/lift2.png'
                        override_flag = true;
                    }
                    
                    // if override condition
                    
                    if (override_flag) {                
                        $.each(all_img, function (img) {
                            var src_img = $(all_img[img]).attr("src")
                            if (src_img == img_path) {
                                // console.log("Match " + src_img + " " + img_path)
                                div_match = all_img[img];
                            }
                            });
                        toggle_image(div_match, loc_str);
                    }
                }
            }
      
          
          
          
      }
      
        //
        // WOTH
        //
        
        else if (first_arg == 'woth' || first_arg == 'barren') {
            area = args[1];
            
            
            
            if (area == 'clear') {
                var entries = $('.' + first_arg + '_entry')
                 $.each(entries, function (entry) {
                    $(entries[entry]).text("-");
                 });
            }
            
            else {
                
                area_lookup = area_dict[area];
                

                if (area_lookup == undefined) {
                    area_lookup = area
                }
               
                // console.log("WOTH/BARREN, area: " + area);
                
                var entries = $('.' + first_arg + '_entry')
                var div_match = undefined;
                $.each(entries, function (entry) {
                    var entry_text = $(entries[entry]).text()
                    if (entry_text == '-') {
                        div_match = entries[entry];
                        return false; 
                    }
                    });
                
                
                    $(div_match).text(area_lookup);
                    // console.log(div_match)
                    update_log(first_arg.toUpperCase() + " set to " + area_lookup )
                
                
            }
            
        }
        
        //
        // ALLMED
        //
        
        else if (first_arg == 'allmed') {
            // allmed deku forest water fire free spirit
            var forest_text = toTitleCase(args[1])
            if (forest_text == "Dc") {
                forest_text = "Dodongo"
            }
            if (dungeon_list.indexOf(forest_text) <= -1) {
                forest_text = "???"
            }
            $('#forest_medallion_text').text(forest_text)
            var fire_text = toTitleCase(args[2]) 
            if (fire_text == "Dc") {
                fire_text = "Dodongo"
            }
            if (dungeon_list.indexOf(fire_text) <= -1) {
                fire_text = "???"
            }
            $('#fire_medallion_text').text(fire_text)
            var water_text = toTitleCase(args[3])
            if (water_text == "D") {
                water_text = "Dodongo"
            }
            if (dungeon_list.indexOf(water_text) <= -1) {
                water_text = "???"
            }
            $('#water_medallion_text').text(water_text)
            var shadow_text = toTitleCase(args[4])
            if (shadow_text == "Dc") {
                shadow_text = "Dodongo"
            }
            if (dungeon_list.indexOf(shadow_text) <= -1) {
                shadow_text = "???"
            }
            $('#shadow_medallion_text').text(shadow_text)
            var spirit_text = toTitleCase(args[5])
            if (spirit_text == "Dc") {
                spirit_text = "Dodongo"
            }
            if (dungeon_list.indexOf(spirit_text) <= -1) {
                spirit_text = "???"
            }
            $('#spirit_medallion_text').text(spirit_text)
            var light_text = toTitleCase(args[6])
            if (light_text == "Dc") {
                light_text = "Dodongo"
            }
            if (dungeon_list.indexOf(light_text) <= -1) {
                light_text = "???"
            }
            $('#light_medallion_text').text(light_text)
            
        }
        
        //
        // MED
        // 
        
        else if (first_arg == 'med') {
            // med forest deku
            
            var medallion = args[1]
            var dungeon = toTitleCase(args[2])
            if (dungeon == "Dc") {
                dungeon = "Dodongo"
            }
            if (dungeon_list.indexOf(dungeon) <= -1) {
                set_text = "???"
            }
            else {
                set_text = dungeon
            }
            
            $('#'+ medallion.toLowerCase() +'_medallion_text').text(set_text)
            
            
            
        }
        
        
        //
        // NOTE (default)
        //
              
        else {
            update_log(original_val, "#6f7afc", true)
        }
    
    return false;    
  }
});



    
});







