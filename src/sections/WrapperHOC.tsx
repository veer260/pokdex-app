const Wrapper = (InComingComponent: React.FC) => {
  const OutGoingComponent = (props: any) => {
    const classes =
      "flex-grow mx-4 lg:mx-16 text-white min-h-[80vh]  border-[1px] border-white border-opacity-10";
    return <InComingComponent {...props} styling={classes} />;
  };

  return OutGoingComponent;
};

export default Wrapper;
