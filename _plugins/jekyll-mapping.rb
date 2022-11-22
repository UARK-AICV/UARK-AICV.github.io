module Jekyll
    class MapTag < Liquid::Tag
        
        def initialize(tag_name, text, tokens)
            @config = Jekyll.configuration({})['mapping']
            @engine = @config['provider']
            @key = @config['api_key']
            if @config.has_key?('zoom')
                @zoom = @config['zoom']
            else
                @zoom = '10'
            end
            if text.empty?
                if @config['dimensions']
                    @width = @config['dimensions']['width']
                    @height = @config['dimensions']['height']
                else
                    @width = '600'
                    @height = '400'
                end
            else
                @width = text.split(",").first.strip
                @height = text.split(",").last.strip
            end
            super
        end

        def render(context)
            if context['page']['mapping']
                latitude = context['page']['mapping']['latitude']
                longitude = context['page']['mapping']['longitude']
                layers = context['page']['mapping']['layers']
                locations = context['page']['mapping']['locations']
                zoom = context['page']['mapping'].has_key?('zoom') ? context['page']['mapping']['zoom'] : @zoom
                if layers
                    layers = layers.map { |i| i.to_s }.join(" ")
                end
                if locations
                    locations = locations.map { |i| i.to_s }.join(" ")
                end

                if @engine == 'google_static'
                    return "<img src=\"http://maps.googleapis.com/maps/api/staticmap?markers=#{latitude},#{longitude}&size=#{@width}x#{@height}&zoom=#{@zoom}&sensor=false\">"
                elsif (@engine == 'google_js') || (@engine == 'openstreetmap')
                    return "<div class=\"jekyll-mapping\"
                        data-latitude=\"#{latitude}\"
                        data-longitude=\"#{longitude}\"
                        data-layers=\"#{layers}\"
                        data-locations=\"#{locations}\"
                        data-title=\"#{context['page']['title']}\"
                        data-zoom=\"#{zoom}\"
                        style=\"height:#{@height}px;width:#{@width}px;\"></div>"
                end
            end
        end
    end
end

Liquid::Template.register_tag('render_map', Jekyll::MapTag)