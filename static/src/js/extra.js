/**
 * Created by chanhlt2 on 3/18/14.
 */
openerp.vhr_web_extra = function (instance) {
    instance.web.WebClient = instance.web.WebClient.extend({
            events: {
                'click .oe_toggle_secondary_menu': 'fold_menu',
                'mousedown td.oe_leftbar': 'resizing',

            },
            fold_menu: function () {
                $('span.oe_menu_fold').toggle()
                $('span.oe_menu_unfold').toggle()
                $('.oe_logo').toggleClass("hidden_element")
                $('.oe_secondary_menus_container').toggleClass("hidden_element")
                $('.oe_footer').toggle()
                $('.openerp .oe_leftbar > div').toggleClass("oe_leftbar_folded")

            },
            resizing: function (e) {
                e.preventDefault()
                var start = this.$el.find('.oe_leftbar > div')
                var pressed = true;
                var startX = e.pageX;
                var startWidth = start.width();
                $(start).addClass("resizing");

                $(document).mousemove(function (e) {
                    if (pressed) {
                        $(start).width(startWidth + (e.pageX - startX));
                    }
                });

                $(document).mouseup(function () {
                    if (pressed) {
                        $(start).removeClass("resizing");
                        pressed = false;
                    }
                });


            }
        }
    )
}

