<!DOCTYPE html>
<html>
    <head>
        <title>
            Review
        </title>
        <link rel="stylesheet" href="style.css">
        <script src="main.js"></script>
    </head>
    <body>
        <div class="div_parts">Header</div>
        <div class="div_parts div_body">
            <div class="body_div">
                <h2>Intro</h2>
                <h3>Tags</h3>
                <p>PHP looks for an opening tag when it parses a file</p>
            </div>
            <div class="body_div">
                <h2>Intro</h2>
                <h1></h1>
                <p>This part has span and echoes the variable initial value</p><span id="initial"></span><span id="initial_bool"></span>
                <p>This part has span and echoes the variable changed value</p><span id="changed"></span><span id="changed_bool"></span>
                <div>
                    Get the average of two numbers...<br />
                    <input type="number" id="value_1" /><br />
                    <input type="number" id="value_2" /><br />
                    <button id="average" onclick="average()">Get Ave.</button><br />
                    Value is:<span id="average_value"></span>
                </div>
                <div>
                    Get the php value...<br />
                    <input type="number" id="value_yen" /><br />
                    <button id="average" onclick="yen()">Get yen</button><br />
                    Value is:<span id="yen_value"></span>
                </div>
                <div>
                    Get the mall value...<br />
                    <input type="number" id="value_mall" /><br />
                    <button id="average" onclick="mall()">Get mall value</button><br />
                    Value is:<span id="mall_value"></span>
                </div>
                <div>
                    Get the lbs value...<br />
                    <input type="number" id="value_kg" /><br />
                    <button id="average" onclick="pounds()">Get lbs value</button><br />
                    Value is:<span id="kg_value"></span>
                </div>
            </div>
        </div>
        <div class="div_parts"></div>
    </body>
</html>