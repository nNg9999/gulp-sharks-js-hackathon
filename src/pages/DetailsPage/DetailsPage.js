import DetailsPage from '../../components/DetailsPage/filmsDetailsPage';

export default function (root) {
    DetailsPage(root);
    // eventsHandlers(root);
}

// function eventsHandlers(root) {
//     const goHome = document.querySelector('.go-home');

//     goHome.addEventListener('click', () => {
//         root.innerHTML = '';
//         DetailsPage(root);
//         location.pathname = '/';
//     })
// }

