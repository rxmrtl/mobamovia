<?php
/**
 * Title: Home: Hero
 * Slug: mobamovia/home-hero
 * Categories: mobamovia-patterns
 */
?>
<!-- wp:group {"tagName":"section","className":"sec_banner_home","layout":{"type":"constrained"}} -->
<section class="wp-block-group sec_banner_home">
    <!-- wp:group {"className":"max_container div_banner_home","layout":{"type":"constrained"}} -->
    <div class="wp-block-group max_container div_banner_home">
        <!-- wp:image {"sizeSlug":"large","linkDestination":"none","className":"is-style-default"} -->
        <figure class="wp-block-image size-large is-style-default"><img src="" alt="Image of a banner"/></figure>
        <!-- /wp:image -->

        <!-- wp:image {"sizeSlug":"large","linkDestination":"none","className":"banner_img_mob"} -->
        <figure class="wp-block-image size-large banner_img_mob"><img src="" alt="Mobile version of the banner image"/></figure>
        <!-- /wp:image -->

        <!-- wp:group {"className":"banner_title","layout":{"type":"constrained"}} -->
        <div class="wp-block-group banner_title">
            <!-- wp:paragraph -->
            <p>A</p>
            <!-- /wp:paragraph -->
            <!-- wp:paragraph -->
            <p>B</p>
            <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->

        <!-- wp:html -->
        <div class="mm_logo_animate">
            <div class="connecting-line" id="connectingLine">
                <div class="arrow" id="arrow"></div>
            </div>
            <div class="text-group" id="movia">
                <span class="character">M</span>
                <span class="character">O</span>
                <span class="character">V</span>
                <span class="character">I</span>
                <span class="character circle-char" id="circleA">A</span>
            </div>
            <div class="text-group" id="moba">
                <span class="character">M</span>
                <span class="character">O</span>
                <span class="character circle-char" id="circleB">B</span>
                <span class="character">A</span>
            </div>
        </div>
        <!-- /wp:html -->

        <!-- wp:group {"className":"banner_text","layout":{"type":"constrained"}} -->
        <div class="wp-block-group banner_text">
            <!-- wp:paragraph -->
            <p>Ensemble pour soutenir <br>votre milieu grâce à la mobilité durable</p>
            <!-- /wp:paragraph -->
            <!-- wp:buttons -->
            <div class="wp-block-buttons">
                <!-- wp:button {"className":"orange_btn"} -->
                <div class="wp-block-button orange_btn"><a class="wp-block-button__link" href="#">Nous contacter</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
</section>
<!-- /wp:group -->
