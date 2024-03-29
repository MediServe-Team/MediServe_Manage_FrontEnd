import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';

function Breadcrumb() {
  const list = useSelector((state) => state.breadcrumb?.breadcrumbList);
  const renderBreadcrumb = (list) => {
    return list.length !== 0
      ? list.map((tab, index) =>
          index !== list.length - 1 ? (
            <div className="flex items-center" key={index}>
              <div className="flex border-2 border-gray-400 bg-light_gray rounded-md px-2">
                <Link to={tab.slug} className="font-medium text-h6 whitespace-nowrap">
                  {tab.name}
                </Link>
              </div>
              {!(index >= list.length - 1) && <GoChevronRight />}
            </div>
          ) : (
            <div className="flex items-center" key={index}>
              <div className="flex border-2 border-gray-400 bg-light_gray rounded-md px-2">
                <span className="font-medium text-h6 whitespace-nowrap">{tab.name}</span>
              </div>
              {!(index >= list.length - 1) && <GoChevronRight />}
            </div>
          ),
        )
      : '';
  };

  return <div className="flex flex-row">{renderBreadcrumb(list)}</div>;
}

export default Breadcrumb;
