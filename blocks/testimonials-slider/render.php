<?php
/**
 * Testimonials Slider Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'testimonials-slider-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'testimonials-slider';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

$testimonials = get_field('testimonial_items');

?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
    <?php if ( $testimonials ) : ?>
        <div class="slider_container">
            <div class="slide active">
                <div class="testimonial_grid">
                    <?php
                    $count = 0;
                    foreach ( $testimonials as $testimonial ) :
                        $quote = $testimonial['quote'];
                        $author = $testimonial['author'];
                        $source = $testimonial['source'];
                        $layout_style = $testimonial['layout_style'];
                        $p_class = $layout_style === 'large_text' ? 'card_large_txt' : '';

                        if ($count % 2 == 0) {
                            if ($count > 0) echo '</div>'; // close previous row
                            echo '<div class="testimonials_row">';
                        }
                    ?>
                        <div class="testimonial_card">
                            <p class="<?php echo esc_attr($p_class); ?>"><?php echo esc_html($quote); ?></p>
                            <div>
                                <p class="testimo_card_title"><?php echo esc_html($author); ?></p>
                                <p><?php echo esc_html($source); ?></p>
                            </div>
                        </div>
                    <?php
                        $count++;
                    endforeach;
                    if ($count > 0) echo '</div>'; // close final row
                    ?>
                </div>
            </div>
            <!-- Navigation -->
            <button class="slider_nav prev" aria-label="Previous slide">🡐</button>
            <button class="slider_nav next" aria-label="Next slide">🡒</button>
        </div>
    <?php else : ?>
        <p>Please add testimonials.</p>
    <?php endif; ?>
</div>
