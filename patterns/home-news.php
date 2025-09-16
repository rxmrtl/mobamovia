<?php
/**
 * Title: Home: News
 * Slug: mobamovia/home-news
 * Categories: mobamovia-patterns
 */
?>
<!-- wp:group {"tagName":"section","className":"sec_actual_home","layout":{"type":"constrained"}} -->
<section class="wp-block-group sec_actual_home">
    <!-- wp:group {"className":"max_container div_actual_home","layout":{"type":"default"}} -->
    <div class="wp-block-group max_container div_actual_home">
        <!-- wp:columns -->
        <div class="wp-block-columns">
            <!-- wp:column {"className":"div_actual_left"} -->
            <div class="wp-block-column div_actual_left">
                <!-- wp:heading {"level":2} -->
                <h2>Actualités</h2>
                <!-- /wp:heading -->
                <!-- wp:paragraph -->
                <p>Derniers articles ou mémoires</p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:column -->

            <!-- wp:column {"className":"div_actual_right"} -->
            <div class="wp-block-column div_actual_right">
                <!-- wp:query {"queryId":1,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"displayLayout":{"type":"flex","columns":3}} -->
                <div class="wp-block-query">
                    <!-- wp:post-template -->
                    <!-- wp:post-featured-image {"isLink":true} /-->
                    <!-- wp:post-title {"isLink":true,"level":3} /-->
                    <!-- /wp:post-template -->

                    <!-- wp:no-results -->
                    <!-- wp:paragraph -->
                    <p>Aucun article pour le moment.</p>
                    <!-- /wp:paragraph -->
                    <!-- /wp:no-results -->
                </div>
                <!-- /wp:query -->
            </div>
            <!-- /wp:column -->
        </div>
        <!-- /wp:columns -->

        <!-- wp:group {"className":"div_actual_btn","layout":{"type":"constrained"}} -->
        <div class="wp-block-group div_actual_btn">
            <!-- wp:buttons -->
            <div class="wp-block-buttons">
                <!-- wp:button {"className":"orange_btn"} -->
                <div class="wp-block-button orange_btn"><a class="wp-block-button__link" href="/">Voir toutes nos publications et outils</a></div>
                <!-- /wp:button -->
            </div>
            <!-- /wp:buttons -->
        </div>
        <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
</section>
<!-- /wp:group -->
