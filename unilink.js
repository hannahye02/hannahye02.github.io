<!DOCTYPE html>
<html>
<head>
  <title>Redirecting...</title>
  <script type="text/javascript">
    function redirect() {
      window.location.href = 'https://yourapp.com/path?query=parameters'; // Your Universal Link
    }
  </script>
</head>
<body onload="redirect()">
  <!-- You can put a manual link here or some instructions in case the redirect does not work -->
  If you are not redirected, <a href="javascript:redirect()">click here</a>.
</body>
</html>

