<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Laravel</title>
    <!-- Styles -->
    <style>
        @import url('https://fonts.googleapis.com/css?family=Anton|Roboto+Condensed&display=swap');

        html,
        body {
            background-color: #fff;
            color: #636b6f;
            font-weight: 200;
            height: 100vh;
            margin: 0;

        }

        .full-height {
            background-image: linear-gradient(to left bottom, #00bdff, #83c4fd, #b5cdf6, #d4d8ee, #e7e7e7);
            height: 100%;
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
            /* height: 95%; */
            width: 100%;
        }

        .title {
            font-size: 84px;
        }

        .links>a>button {
            color: #2c6ea8;
            padding: 15px 25px;
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 4px;
            text-decoration: none;
            text-transform: uppercase;
            font-family: 'Roboto Condensed', sans-serif;
            background: #8dbdf0;
            border-radius: 8px;
            border: 3px solid #2c6ea8;
            -webkit-box-shadow: -1px 9px 10px -5px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: -1px 9px 10px -5px rgba(0, 0, 0, 0.75);
            box-shadow: -1px 9px 10px -5px rgba(0, 0, 0, 0.75);
            width: 200px;
        }

        .links>a>button:hover {
            background: #adcef1;
            transition: .5s;
        }

        .m-b-md {
            /* margin-bottom: 30px; */
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        img.showcase-image {
            width: 80%;
            height: 500px;
        }

        h1.showcase-title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: 'Anton', sans-serif;
            color: #809ead;
            padding-left: 50px;
            width: 100%;
            font-size: 130px;
            text-shadow: 5px -5px #0c2233, 1px -2px #3490dc, -6px 10px #000101, 2px 0px #3490dc;
        }

        h1.showcase-title .bug {
            /* -webkit-animation: color-change 1.5s infinite;
                -moz-animation: color-change 1.5s infinite;
                -o-animation: color-change 1.5s infinite;
                -ms-animation: color-change 1.5s infinite;
                animation: color-change 1.5s infinite; */
        }

        img.bug {
            height: 150px;
            width: 171px;

        }

        span.bug-container {
            display: inline-block;
            width: 200px;
            border-radius: 100%;
            margin-right: -50px;
            -webkit-animation: color-change 1.5s infinite;
            -moz-animation: color-change 1.5s infinite;
            -o-animation: color-change 1.5s infinite;
            -ms-animation: color-change 1.5s infinite;
            animation: color-change 1.5s infinite;
        }

        @media (max-width: 800px) {
            img.showcase-image {
                width: 100%;
                height: 100%;
            }

            h1.showcase-title {
                font-size: 95px;
                padding-left: 10px;
            }
        }

        @-webkit-keyframes color-change {
            0% {
                background-color: aliceblue;
            }

            50% {
                background-color: transparent;
            }

            100% {
                background-color: aliceblue;
            }
        }

        @-moz-keyframes color-change {
            0% {
                background-color: aliceblue;
            }

            50% {
                background-color: transparent;
            }

            100% {
                background-color: aliceblue;
            }
        }

        @-ms-keyframes color-change {
            0% {
                background-color: aliceblue;
            }

            50% {
                background-color: transparent;
            }

            100% {
                background-color: aliceblue;
            }
        }

        @-o-keyframes color-change {
            0% {
                background-color: aliceblue;
            }

            50% {
                background-color: transparent;
            }

            100% {
                background-color: aliceblue;
            }
        }

        @keyframes color-change {
            0% {
                background-color: aliceblue;
            }

            50% {
                background-color: transparent;
            }

            100% {
                background-color: aliceblue;
            }
        }
    </style>
</head>

<body>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="title m-b-md">
                <img class="showcase-image" src="{{ url("/asset_images/bug_fixed.svg") }}" alt="" srcset="">
                <h1 class="showcase-title"><span class="bug-container"><img class="bug"
                            src="https://images2.imgbox.com/6d/a4/DCCvciwF_o.png" /></span> Tracker</h1>
            </div>
            @if (Route::has('login'))
            <div class="links mt-5">
                @auth
                <a href="{{ url('/dashboard/') }}"><button class="">Home</button></a>
                @else
                <a href="{{ route('login') }}"><button class="">Login</button></a>

                @if (Route::has('register'))
                <a href="{{ route('register') }}"><button class=" ml-3">Register</button></a>
                @endif
                @endauth
            </div>
            @endif
        </div>
    </div>
</body>

</html>
