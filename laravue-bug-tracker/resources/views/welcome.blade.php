<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <!-- Styles -->
        <style>
            @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-weight: 200;
                height: 100vh;
                margin: 0;

            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
                height: 95%;
                width: 100%;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #225f91;
                padding: 0 25px;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 3px;
                text-decoration: none;
                text-transform: uppercase;
                                font-family: 'Anton', sans-serif;
            }

            .m-b-md {
                margin-bottom: 30px;
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            img.showcase-image{
                width: 80%;
                height: 80%;
            }
            h1.showcase-title{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Anton', sans-serif;
                color: #68a6f7;
                padding-left: 50px;
                width: 100%;
                font-size: 130px;
                text-shadow: 5px -5px #1c4f79, 1px -2px #3490dc, -6px 10px #1e5480, 2px 0px #3490dc;
            }
            h1.showcase-title .bug{
                -webkit-animation: color-change 1.5s infinite;
                -moz-animation: color-change 1.5s infinite;
                -o-animation: color-change 1.5s infinite;
                -ms-animation: color-change 1.5s infinite;
                animation: color-change 1.5s infinite;
            }

            @media (max-width: 800px){
                img.showcase-image{
                    width: 100%;
                    height: 100%;
                }
                h1.showcase-title{
                    font-size: 95px;
                     padding-left: 10px;
                }
            }
            @-webkit-keyframes color-change {
                0% { color: aliceblue; }
                50% { color: #68a6f7; }
                100% { color: aliceblue; }
            }
            @-moz-keyframes color-change {
                0% { color: aliceblue; }
                50% { color: #68a6f7; }
                100% { color: aliceblue; }
            }
            @-ms-keyframes color-change {
                0% { color: aliceblue; }
                50% { color: #68a6f7; }
                100% { color: aliceblue; }
            }
            @-o-keyframes color-change {
                0% { color: aliceblue; }
                50% { color: #68a6f7; }
                100% { color: aliceblue; }
            }
            @keyframes color-change {
                0% { color: aliceblue; }
                50% { color: #68a6f7; }
                100% { color: aliceblue; }
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/dashboard/') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    <img class="showcase-image" src="{{ url("/asset_images/bug_fixed.svg") }}" alt="" srcset="">
                    <h1 class="showcase-title"><span class="bug">BUG</span> Tracker</h1>
                </div>
            </div>
        </div>
    </body>
</html>
