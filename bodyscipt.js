
    ((
            ($) => {
                const table = $('table');
                table.each(function(index, item) {
                    const table = $(item);
                    const labels = [];
                    const th = table.find('thead tr th');
                    const body_tr = table.find('tbody tr');

                    th.each(function(index, label) {
                        labels.push($(label).html());
                    });

                    body_tr.each(function(index, tr) {
                        const td = $(tr).find('td');
                        td.each(function(index, td) {
                            $(td).attr('data-name', labels[index]);
                        });
                    });
                });

                $('.lego_eb-3').find('> .lego_eb').each(function(index) {
                    var _withGreyBG = true;
                    if (index % 2 !== 0 || index === 1 || (index + 1 === $('.lego_eb-3').find('> .lego_eb').length)) {
                        _withGreyBG = false;
                    }
                    console.log('_withGreyBG', _withGreyBG, $(this))
                    if (_withGreyBG) {
                        $(this).find('> div').addClass('block_bg');
                    } else {
                        $(this).find('> div').removeClass('block_bg');
                        // $(this).find('.block_bg_svg_top').remove();
                        $(this).find('.block_bg_svg_bottom').remove();
                    }
                });
            }
        )
        (jQuery));
