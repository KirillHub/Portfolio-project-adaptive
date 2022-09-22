<html>
	<head>
		<body>
			<?php
			pre_r($_POST);
			?>
			
			<form action="#" method="POST">
				<p>First name: <input type="text" name="firstname" value=""></p>
				<input type="submit" name="submit" value="Submit">
			</form>
		</body>
	</head>
</html>

<?php

function pre_r( $array){
	echo '<pre>';
	print_r($array);
	echo '</pre>';
}
?>