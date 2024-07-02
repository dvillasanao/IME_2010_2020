<script>
    $(function() {
        $("#toc h2").html("Contenido");
    });
</script>
<script>
    $(function() {
        $(".sidebar h2").html("Contenido");
    });
</script>


<script src="/lightbox.js"></script>

<script>
$('img')
    .wrap(function(index) {
        return '<a href="'+$(this).attr('src')+'" data-lightbox="image-'+index+'"></a>';
    });
</script>