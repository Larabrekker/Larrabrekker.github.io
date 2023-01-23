$(function() {
  var b = $("#button");
  var w = $("#collapsable");
  var l = $("#list");
  
  w.height(l.outerHeight(true));

  b.click(function() {
  
    if(w.hasClass('content')) {
      w.removeClass('content');
      w.height(0);
    } else {
      w.addClass('content');
      w.height(l.outerHeight(true));
    }
  
  });
});



import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fewcywtpditheaemdsbb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)