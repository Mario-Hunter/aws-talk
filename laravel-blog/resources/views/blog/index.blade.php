<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @auth
        <meta name="api-token" content="{{ auth()->user()->api_token }}">
    @endauth

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-light">
     <div>


        <div class="container">

            <div class="row">
                <div class="col-md-12">
                        <div id="example"></div>
                </div>
            </div>
        </div>

    </div>

    <!-- Scripts -->
    @stack('inline-scripts')

    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
