<?php
    $host = 'localhost';
    $dbname = 'jamp_database';
    $username = 'root';
    $password = '';

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['formEmail'];
    $country = $_POST['country'];

    $conn = mysqli_connect($host, $username, $password, $dbname);
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into users(firstName, lastName, email, country) values(?, ?, ?, ?) ");
        $stmt->bind_param("ssss", $firstName, $lastName, $email, $country);
        $stmt->execute();
        echo "Form submitted sucessfully";
        ?>
            <br>
            <br>
            <button><a style="text-decoration: none; color: black" href="index.html">Return to website</a></button>
        <?php
        $stmt->close();
        $conn->close();
    }
?>