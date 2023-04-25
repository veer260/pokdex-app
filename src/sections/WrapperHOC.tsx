const Wrapper = (InComingComponent: React.FC) => {
  const OutGoingComponent = (props: any) => {
    const classes =
      "flex-grow mx-16 text-white border-[1px] border-white border-opacity-20";
    return <InComingComponent {...props} styling={classes} />;
  };

  return OutGoingComponent;
};

export default Wrapper;