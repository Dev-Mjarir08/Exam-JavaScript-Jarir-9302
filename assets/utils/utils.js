let bas_url = window.location.href;
let preFix = "";

if (bas_url.includes("vercel.app")) {
    preFix = "/assets/pages/";
} 
else if (bas_url.includes("index")) {
    preFix = "./assets/pages/";
} 
else {
    preFix = "";
}
let nav = `
    <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><i class="bi bi-lightning"></i>NEO<span>MART</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-danger" aria-current="page" href="${preFix}index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${preFix}addpro.html">Add Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${preFix}editpro.html">Edit Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${preFix}viewpro.html">View Product</a>
                        </li>
                </div>

                <div class="icons">
                 <ul class="navbar-nav d-flex align-items-center">
                     <li class="nav-item">
                          <a class="nav-link fw-semibold " href="${preFix}cart.html">
                    <i class="bi bi-cart btn btn-outline fs-5 text-light "></i>
             
                    </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light active" aria-current="page" href="#"> <i class="bi bi-person me-3"></i>Account</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
const header = document.querySelector('header').innerHTML = nav;
export default header;





