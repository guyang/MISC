<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ClientHost.Default" %>
<html>
<head>
    <title>Test Client Proxy</title>
    <script src="MicrosoftAjax.js" type="text/javascript"></script>
    <script src="soapclient.js" type="text/javascript"></script>
    <script src="Environment.js" type="text/javascript"></script>
    <script>
        // Make async call
        function test() {
            Sample.Client.Environment.getEnvironment(
                function (env) {
                    document.getElementById('divEnv').innerHTML = env;
                });
        }

        // Delay to see the effect
        window.setTimeout(test, 2000);
    </script>
    <style>
        div {
            font-weight: bold;
            color: cyan;
        }
    </style>
</head>
<body>
    <div id="divEnv">
        Calling Web Service ...
    </div>
</body>
</html>
