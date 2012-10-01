body = File.open("#{Dir.pwd}/page.html")

run lambda { |env| [200, {'Content-Type'=>'text/plain'}, body] }
