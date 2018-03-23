<?php
// includes header.php file
include "header.php";
?>
<td align=center>
<!--Copy the below code in to the pages where you want HIR (HIOX Image Rotator)<br><br>-->
    <table width=400 height=250 align=center class=maintext>
        <tr>
        <td>
    <form name="select_all">
    <textarea style="color: green; font-size: 13px;" name="text_area" rows="8" cols="80" border=0px>
        <?php
            $url = $_SERVER['SCRIPT_FILENAME'];
               // Find the position of the last occurrence of a substring in $url
                $pp = strrpos($url,"/");
                // Returns the portion of string specified by the start and length parameters.
                $url = substr($url,0,$pp);
                //Contains the current script's path. This is useful for pages which need to point to themselves.
                $ura = $_SERVER['SCRIPT_NAME'];
                //The name of the server host under which the current script is executing
                $host = $_SERVER['SERVER_NAME'];
               
                $ser = "http://$host";
                 // maakt eenhttp plus naam v/d server host
                $ura= $ser.$ura; 
                
                $pp1 = strrpos($ura,"/");
                
                $ura = substr($ura,0,$pp1);
                // explodes string waar er een / staat
        $url1=explode('/', $url);
                //pops and returns the last value of the array, shortening the array by one element
        $url=array_pop($url1);
//                implodes de url1 waar er een / staat
        $url1=implode('/', $url1);
                // explodes string waar er een / staat
        $ura1=explode('/', $ura);
                 //pops and returns the last value of the array, shortening the array by one element
        $ura=array_pop($ura1);
                 //implodes de url1 waar er een / staat
        $ura1=implode('/', $ura1);
// echo 
echo "
//less than
&lt?php 

  $"."hm = \"$url1\"; 
  $"."hm2 = \"$ura1\"; 
      
  include \"$"."hm/HIR/hioxImageRotate.php\";
      
//greater than
?&gt;";
        ?>
    //    einde textarea
    </textarea><br><br>

    // button met pointer naar die twee javascript functies aanroept. 
    <input type="button" value="Select All" onClick="javascript:this.form.text_area.focus();this.form.text_area.select();">
    //einde formulier
    </form>
    </td>
        </tr>
        </table>
</td>
<?php
// de file "footer.php" includen in dit bestand
include "footer.php";
?>