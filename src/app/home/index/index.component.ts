import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
ngOnInit()
{

  let styles = [
    "../../../assets/home/lib/animate/animate.min.css",
    "../../../assets/home/lib/owlcarousel/assets/owl.carousel.min.css",
   "../../../assets/home/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css",
   "../../../assets/home/css/bootstrap.min.css",
   "../../../assets/home/css/style.css"
  ]

  styles.forEach(s => {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = s;
    document.head.appendChild(link);
  })

  let scripts = [
    "../../../assets/home/lib/wow/wow.min.js",
    "../../../assets/home/lib/easing/easing.min.js",
    "../../../assets/home/lib/waypoints/waypoints.min.js",
   "../../../assets/home/lib/counterup/counterup.min.js",
    "../../../assets/home/lib/owlcarousel/owl.carousel.min.js",
    "../../../assets/home/lib/tempusdominus/js/moment.min.js",
    "../../../assets/home/lib/tempusdominus/js/moment-timezone.min.js",
    "../../../assets/home/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js",
    "../../../assets/home/js/main.js"
  ]

  scripts.forEach(s=>
  {
    let script = document.createElement('script');
    script.src = s;
    script.async = true;
    document.body.appendChild(script)
  }
  )
}
}
