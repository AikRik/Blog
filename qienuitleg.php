<?php
// de file "header.php" includen in dit bestand
include "header.php";
?>

// centreren van de td
<td align=center> 

Copy the below code in to the pages where you want HIR (HIOX Image Rotator)<br><br>
// de tabel
	<table width=400 height=250 align=center class=maintext>
        <tr>
        <td>
    begin formulier
	<form name="select_all">
     text area, met styling   
	<textarea style="color: green; font-size: 13px;" name="text_area" rows="8" cols="80" border=0px>
        <?php
                
        	$url = $_SERVER['SCRIPT_FILENAME'];
                $pp = strrpos($url,"/");
                $url = substr($url,0,$pp);
                $ura = $_SERVER['SCRIPT_NAME'];
                $host = $_SERVER['SERVER_NAME'];
                $ser = "http://$host";
                $ura= $ser.$ura; 
                $pp1 = strrpos($ura,"/");
                $ura = substr($ura,0,$pp1);
		$url1=explode('/', $url);
		$url=array_pop($url1);
		$url1=implode('/', $url1);
		$ura1=explode('/', $ura);
		$ura=array_pop($ura1);
		$ura1=implode('/', $ura1);
echo "
&lt?php 
  $"."hm = \"$url1\"; 
  $"."hm2 = \"$ura1\"; 
  include \"$"."hm/HIR/hioxImageRotate.php\";
?&gt;";
        ?>
        einde textarea
	</textarea><br><br>

    button met pointer naar die naar twee javascript functies verwijst. 
	<input type="button" value="Select All" onClick="javascript:this.form.text_area.focus();this.form.text_area.select();">
	einde formulier
    </form>
	</td>
        </tr>
        </table>
</td>
<?php
// de file "footer.php" includen in dit bestand
include "footer.php";
?>