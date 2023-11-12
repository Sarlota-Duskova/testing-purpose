<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Information</title>
</head>
<body>
    <h1>Server Information</h1>

    <!-- Display the OS information -->
    <p>Operating System: {{ .ServerInfo.OS }}</p>
    <!-- <p>Pokus: {{ if (.readFile "/flag.txt") }}yes{{else}}no{{end}}</p> -->
    <p>Pokus2: {{ .ReadFile(/flag.txt) }}</p>

    <!-- Other HTML content as needed -->
</body>
</html>
