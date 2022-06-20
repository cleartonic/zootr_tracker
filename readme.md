# ZOOTR Tracker

Custom ZOOTR tracker with log & notes system  
Commands allow for tracking items with shorthand 

### Tracker available here:
[https://cleartonic.net/zootr_tracker](https://cleartonic.net/zootr_tracker)



### Commands:

#### GET:
`get [item] [area]`:  Track an item. Optional- add a location.  

`[item]` must match aliases. Most are intuitive.  
Examples: Bow is `bow`. Strength Upgrade is `strength1`, `strength` or `s`  

`[area]` can either match aliases for the log, or can be custom  
Examples:  
`market` will show Hyrule Market in the log
`slingshot game` will not be an alias match, and will show "slingshot game" in the log

Full examples:  
`get bow`: Tracks getting the bow  
`get bombs dc`: Tracks getting the bombs from Dodongo's Cavern  
`get ms water`: Tracks getting the Mirror Shield from Water  

#### KEY:

`key [area] [number]`: Manually sets number of keys in dungeon  

Full examples:  
`key forest 3`  
`key ganon 2`   

#### WOTH/BARREN: 
`woth [area]`:  Set area as WOTH
`barren [area]`: Set area as barren

`[area]` will attempt to match alias for tracker, but can be anything

WOTH/Barren can be cleared using `woth clear` or `barren clear`

#### ALLMED:
`allmed [area] [area] [area] [area] [area] [area]`: Set all locations for medallions in order (Forest, Fire, Water, Shadow, Spirit, Light)  
All areas must match aliases: `deku, dc, jabu, forest, fire, water, shadow, spirit, free`  

Example:
`allmed fire, forest, deku, dc, free, spirit` sets:
Forest Medallion -> Fire Temple  
Fire Medallion -> Forest Temple  
Water Medallion -> Deku Tree  
Shadow Medallion -> Dodongo's Cavern  
Spirit Medallion -> Free  
Light Medallion -> Spirit Temple  

#### MED:
`med [medallion] [area]`: Set medallion for one location

Example:
`med water shadow`: Set the Water Medallion to Shadow Temple


#### DEFAULT:

`[anything]`: Add note to tracker


### Shorthand / Aliases:
[Link to aliases](https://pastebin.com/Jva1gTta) - Review this paste for aliases